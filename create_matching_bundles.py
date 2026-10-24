import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

def isolate_product(im_path):
    im = Image.open(im_path).convert('RGBA')
    arr = np.array(im, dtype=float)
    
    # Background color estimation from top corners
    bg_color = np.array([243.0, 246.0, 248.0])
    
    # Distance from background color
    color_dist = np.linalg.norm(arr[:, :, :3] - bg_color, axis=2)
    
    # Create smooth alpha mask
    # Far from background = fully opaque (255)
    # Close to background = transparent (0)
    alpha = np.clip((color_dist - 8.0) * (255.0 / 22.0), 0, 255).astype(np.uint8)
    
    # Smooth alpha edges slightly
    alpha_img = Image.fromarray(alpha, mode='L')
    alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(1.2))
    
    im.putalpha(alpha_img)
    return im

def create_duo_pack():
    single_path = 'assets/images/package_single.jpg'
    unit = isolate_product(single_path)
    
    # Base canvas (same 1200 x 896 with smooth soft-light gradient)
    canvas = Image.new('RGBA', (1200, 896), (244, 247, 249, 255))
    
    # Scale unit slightly to fit 2 side-by-side gracefully
    # Scale down by 0.78
    w, h = unit.size
    scale = 0.78
    new_w, new_h = int(w * scale), int(h * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Unit 1 (Left, slightly back)
    # Unit 2 (Right, slightly forward)
    pos1 = (90, 110)
    pos2 = (280, 140)
    
    # Paste Unit 1
    canvas.paste(unit_scaled, pos1, unit_scaled)
    # Paste Unit 2
    canvas.paste(unit_scaled, pos2, unit_scaled)
    
    canvas.convert('RGB').save('assets/images/package_duo.jpg', quality=95)
    print("Duo pack generated successfully!")

def create_trio_pack():
    single_path = 'assets/images/package_single.jpg'
    unit = isolate_product(single_path)
    
    canvas = Image.new('RGBA', (1200, 896), (244, 247, 249, 255))
    
    # Scale down to 0.68 to fit 3 units in balanced pyramid
    w, h = unit.size
    scale = 0.68
    new_w, new_h = int(w * scale), int(h * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Left back, Right back, Center front
    pos_left = (30, 130)
    pos_right = (410, 130)
    pos_center = (220, 170)
    
    canvas.paste(unit_scaled, pos_left, unit_scaled)
    canvas.paste(unit_scaled, pos_right, unit_scaled)
    canvas.paste(unit_scaled, pos_center, unit_scaled)
    
    canvas.convert('RGB').save('assets/images/package_trio.jpg', quality=95)
    print("Trio pack generated successfully!")

def create_floating_cinematic():
    single_path = 'assets/images/package_single.jpg'
    unit = isolate_product(single_path)
    
    # 1:1 Cinematic Canvas
    size = (1000, 1000)
    
    # Create luxurious deep emerald cinematic background
    # Radial dark green to black gradient
    bg = Image.new('RGBA', size, (10, 25, 18, 255))
    draw = ImageDraw.Draw(bg)
    
    # Gradient rings
    center_x, center_y = 500, 500
    for r in range(700, 0, -5):
        alpha_val = int(255 * (1 - r / 700))
        green_val = int(25 + 50 * (1 - r / 700))
        draw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r], 
                     fill=(8, green_val, 16, 255))
    
    # Add subtle glowing particles
    np.random.seed(42)
    for _ in range(120):
        px = np.random.randint(50, 950)
        py = np.random.randint(50, 950)
        pr = np.random.randint(2, 6)
        brightness = np.random.randint(100, 255)
        draw.ellipse([px-pr, py-pr, px+pr, py+pr], fill=(74, 222, brightness, 180))
    
    # Glow aura behind the product
    glow = Image.new('RGBA', size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([250, 220, 750, 780], fill=(74, 222, 128, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    bg.paste(glow, (0, 0), glow)
    
    # Scale the exact unit to fit floating in center
    w, h = unit.size
    scale = 0.88
    new_w, new_h = int(w * scale), int(h * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Place unit floating in center
    pos = ((size[0] - new_w) // 2, (size[1] - new_h) // 2 - 20)
    bg.paste(unit_scaled, pos, unit_scaled)
    
    bg.convert('RGB').save('assets/images/hhs_a1_3d_master.jpg', quality=95)
    bg.convert('RGB').save('assets/images/capsule_macro.jpg', quality=95)
    print("Floating cinematic artwork generated successfully!")

if __name__ == '__main__':
    create_duo_pack()
    create_trio_pack()
    create_floating_cinematic()
