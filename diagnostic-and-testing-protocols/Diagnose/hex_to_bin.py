import tkinter as tk
from tkinter import messagebox

# Conversion functions
def hex_to_bin(hex_val):
    try:
        return bin(int(hex_val, 16))[2:]
    except ValueError:
        return "Invalid Hex Input"

def hex_to_dec(hex_val):
    try:
        return str(int(hex_val, 16))
    except ValueError:
        return "Invalid Hex Input"

def bin_to_hex(bin_val):
    try:
        return hex(int(bin_val, 2))[2:].upper()
    except ValueError:
        return "Invalid Binary Input"

def bin_to_dec(bin_val):
    try:
        return str(int(bin_val, 2))
    except ValueError:
        return "Invalid Binary Input"

def dec_to_bin(dec_val):
    try:
        return bin(int(dec_val))[2:]
    except ValueError:
        return "Invalid Decimal Input"

def dec_to_hex(dec_val):
    try:
        return hex(int(dec_val))[2:].upper()
    except ValueError:
        return "Invalid Decimal Input"

# GUI Functions
def convert():
    input_val = input_entry.get().strip()
    base = conversion_var.get()

    if base == "Hex":
        bin_result.set(hex_to_bin(input_val))
        dec_result.set(hex_to_dec(input_val))
    elif base == "Bin":
        hex_result.set(bin_to_hex(input_val))
        dec_result.set(bin_to_dec(input_val))
    elif base == "Dec":
        bin_result.set(dec_to_bin(input_val))
        hex_result.set(dec_to_hex(input_val))
    else:
        messagebox.showerror("Error", "Please select a valid conversion type")

# GUI Layout
root = tk.Tk()
root.title("Hex, Bin, Dec Converter")

conversion_var = tk.StringVar(value="Hex")

# Labels and Inputs
tk.Label(root, text="Enter Value:").grid(row=0, column=0, padx=10, pady=10)
input_entry = tk.Entry(root, width=20)
input_entry.grid(row=0, column=1, padx=10, pady=10)

# Conversion Type Radio Buttons
tk.Radiobutton(root, text="Hex", variable=conversion_var, value="Hex").grid(row=1, column=0)
tk.Radiobutton(root, text="Bin", variable=conversion_var, value="Bin").grid(row=1, column=1)
tk.Radiobutton(root, text="Dec", variable=conversion_var, value="Dec").grid(row=1, column=2)

# Result Labels
tk.Label(root, text="Binary:").grid(row=2, column=0, padx=10, pady=10)
bin_result = tk.StringVar()
tk.Label(root, textvariable=bin_result).grid(row=2, column=1, padx=10, pady=10)

tk.Label(root, text="Decimal:").grid(row=3, column=0, padx=10, pady=10)
dec_result = tk.StringVar()
tk.Label(root, textvariable=dec_result).grid(row=3, column=1, padx=10, pady=10)

tk.Label(root, text="Hexadecimal:").grid(row=4, column=0, padx=10, pady=10)
hex_result = tk.StringVar()
tk.Label(root, textvariable=hex_result).grid(row=4, column=1, padx=10, pady=10)

# Convert Button
tk.Button(root, text="Convert", command=convert).grid(row=5, column=1, pady=20)

root.mainloop()
