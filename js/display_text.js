import { app } from "../../scripts/app.js";
import { ComfyWidgets } from "../../scripts/widgets.js";

const NAME = "AGI Display Text";

app.registerExtension({
  name: NAME,
  async beforeRegisterNodeDef(nodeType, nodeData, app) {
    if (nodeData.name === NAME) {
      const onNodeCreated = nodeType.prototype.onNodeCreated;

      nodeType.prototype.onNodeCreated = function () {
        onNodeCreated && onNodeCreated.apply(this, arguments);        

        const options = ["STRING", { multiline: true }];
        // params: node, inputName, inputData, app
        const textarea = ComfyWidgets["STRING"](this, "display", options, app);

        this.textareaNode = textarea.widget;
        this.textareaNode.readOnly = true;
      }

      nodeType.prototype.onExecuted = function (data) {
        const text = data.ret[0];

        this.textareaNode.value = text;
      };
    }
  }
})