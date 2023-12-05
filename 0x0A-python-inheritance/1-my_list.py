#!/usr/bin/python3
"""
consists the MyList class
"""


class MyList(list):
    """a subclass of list"""
    def __init__(self):
        """initializes the object"""
        super().__init__()

    def print_sorted(self):
        """the sorted list print"""
        print(sorted(self))
