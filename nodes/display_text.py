class DisplayText:
  CATEGORY = 'AGI Nodes'
  NAME = 'AGI Display Text'
  OUTPUT_NODE = True
  FUNCTION = "execute"

  @classmethod
  def INPUT_TYPES(cls):
    return {
      "required": {
        "input_text": ("TEXT", ),
        "format": (["JSON", "String", "Number"], { "default": "String" })
      },
      "optional": {

      }
    }
  
  RETURN_TYPES = ()

  def execute(self, **args):
    return {
      "ui": {
        "ret": (args.get("input_text"), ),
        "format": (args.get("format"), )
      }
    }