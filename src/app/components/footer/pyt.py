def valid(s):
    ob = "({["
    cb = ")}]"
    stack = []
    for char in s:
        if char in ob:
            stack.append(char)
        elif char in cb:
            if not stack or stack.pop != ob[cb(char)]:
                return False
            
    return len(stack) == 0

if __name__ == "__main__":

    line = "(){}[]"

    if valid(line):
        print("Valid")
    else:
        print("Invalid")

