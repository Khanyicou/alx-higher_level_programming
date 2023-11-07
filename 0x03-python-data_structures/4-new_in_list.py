#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    return my_list[:idx] + [element] + my_list[idx + 1:] if 0 <= idx < len(my_list) else my_list[:]
