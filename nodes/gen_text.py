class GenText:
  CATEGORY = 'AGI Nodes'
  NAME = 'AGI Gen Text'
  OUTPUT_NODE = False
  FUNCTION = "execute"

  @classmethod
  def INPUT_TYPES(cls):
    return {
      "required": {
        "prompt": ("STRING", { 
          "multiline": True,
          "default": "请输入内容"
        })
      },
      "optional": {

      }
    }
  
  RETURN_TYPES = ("TEXT", )
  RETURN_NAMES = ("text", )

  def execute(self, **args):
    return (args.get('prompt'), )