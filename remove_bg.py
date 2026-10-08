from rembg import remove
from PIL import Image

input_path = 'public/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png'
output_path = 'public/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with_nobg.png'

print("Opening image...")
input_img = Image.open(input_path)

print("Removing background...")
output_img = remove(input_img)

print("Saving image...")
output_img.save(output_path)
print("Done!")
