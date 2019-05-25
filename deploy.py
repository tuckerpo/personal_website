"""Push changes to git and deploy to University at Buffalo Unix Server"""

__author__ = "Tucker Polomik"
__maintainer__ = "Tucker Polomik"
__email__ = "tuckerpo@buffalo.edu | tucker.polomik@inficon.com"

import os
import sys
from sys import argv
import subprocess
import argparse

def get_unstaged_changes():
    return subprocess.check_output(['git', 'diff', '--name-only']).strip().decode("UTF-8").split('\n')

def stage_changes(changes):
    for change in changes:
        subprocess.check_output(['git', 'add', change])

def commit_changes(msg):
    subprocess.check_output(['git', 'commit', '-m', msg.strip()])

def push_changes(branch):
    subprocess.check_output(['git', 'push', 'origin', branch])

def deploy_to_ub_unix(files):
    pass

def print_usage():
    print("Not enough command line arguments found.\r\n \
          Example usage: python deploy.py \"<my commit message>\" <branch to push to>.")

def main():
    for arg in argv:
        print(arg)
    if len(argv) < 3:
        print_usage()
        exit(1)
    changes = get_unstaged_changes()
    stage_changes(changes)
    commit_changes(argv[1])
    push_changes(argv[2])

    



if __name__ == '__main__':
    main()
