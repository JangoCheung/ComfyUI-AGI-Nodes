class DisplayText:
  CATEGORY = 'AGI Nodes'
  NAME = 'AGI Display Text'
  OUTPUT_NODE = True
  FUNCTION = "execute"

  @classmethod
  def INPUT_TYPES(cls):
    return {
      "required": {
        "input_text": ("TEXT", )
      },
      "optional": {

      }
    }
  
  RETURN_TYPES = ()

  def execute(self, input_text):
    return { "ui": { "ret": (input_text, ) } }