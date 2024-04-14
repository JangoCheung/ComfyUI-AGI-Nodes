import server
import sys
import os

from .nodes.display_text import DisplayText
from .nodes.gen_text import GenText

WEB_DIRECTORY = "./js"

NODE_CLASS_MAPPINGS = {
  DisplayText.NAME: DisplayText,
  GenText.NAME: GenText,
}

@server.PromptServer.instance.routes.post("/agi/reboot")
def reboot(self):
    try:
        sys.stdout.close_log()
    except Exception as e:
        pass

    return os.execv(sys.executable, [sys.executable] + sys.argv)