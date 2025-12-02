def add_sub(y):
    x = 10
    ans = y + x
    dns = y - x
    return ans , dns

sum , sub = add_sub(20)
print(sub, sum)
print(sub - sum)


def display():
    
  
    print("display function is running")
    def show():
        print("show is active")
    return show
f = display() # now you get the function
print(f.__doc__)
 
# display()


import inspect
def roudy_rathore():
    print("this function is illustrated as rowdy rathore and this movie name is singham")
g = roudy_rathore
print(g.__doc__)
print(inspect.getsource(g))

print(inspect.getsource(f)) 


print(len(dir(inspect)))

for name, member in inspect.getmembers(inspect):
    if name.startswith("get"):
        print(name)


print(inspect.getmembers(inspect))

def add(a, b):
    """Adds two numbers"""
    return a + b

built_in_attrs = [attr for attr in dir(add) if attr.startswith("__") and attr.endswith("__")]
print(built_in_attrs.__doc__)

for attr_name in built_in_attrs:
    attr_value = getattr(add, attr_name)
    print(f"{attr_name}: {attr_value.__doc__}")

# def function(sh):
#     print(f"disp is called + {show()}")

# def show():
#     return "show function"

# function(show)

def function():
    def show():
        print("show function is running")
    print("hello world")
    return show

result = function()
print(result())

def hello():
    return

hello()