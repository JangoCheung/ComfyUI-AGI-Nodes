import { app } from "../../scripts/app.js";
import { ComfyWidgets } from "../../scripts/widgets.js";

const NAME = "AGI Display Text";

app.registerExtension({
  name: NAME,
  async beforeRegisterNodeDef(nodeType, nodeData, app) {
    if (nodeData.name === NAME) {
      const onNodeCreated = nodeType.prototype.onNodeCreated;
      const onExecuted = nodeType.prototype.onExecuted;

      nodeType.prototype.onNodeCreated = function () {
        onNodeCreated && onNodeCreated.apply(this, arguments);        

        const options = ["STRING", { multiline: true }];
        // node, inputName, inputData, app
        const textarea = ComfyWidgets["STRING"](this, "display", options, app);

        this.textareaNode = textarea.widget;
        this.textareaNode.readOnly = true;
      }

      nodeType.prototype.onExecuted = function (message) {
        const text = message.ret[0];

        this.textareaNode.value = text;
      };
    }
  }
})