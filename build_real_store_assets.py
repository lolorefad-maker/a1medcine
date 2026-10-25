import numpy as np
from PIL import Image, ImageFilter, ImageDraw

def create_drop_shadow(unit, offset=(0, 20), blur=25, shadow_alpha=80):
    # Create soft realistic contact shadow from unit alpha
    alpha = unit.split()[-1]
    shadow = Image.new('RGBA', unit.size, (15, 25, 20, 0))
    shadow_mask = alpha.point(lambda p: int(p * (shadow_alpha / 255.0)))
    shadow.putalpha(shadow_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    return shadow

def build_single_pack():
    unit = Image.open('assets/images/real_product_clean_alpha.png').convert('RGBA')
    bbox = unit.getbbox()
    unit = unit.crop(bbox) # crop to content
    
    # 1200 x 900 canvas with ultra-clean, subtle gradient studio background
    canvas_w, canvas_h = 1200, 900
    canvas = Image.new('RGBA', (canvas_w, canvas_h), (248, 250, 249, 255))
    
    # Add subtle soft floor gradient
    draw = ImageDraw.Draw(canvas)
    for y in range(450, 900):
        shade = int(248 - (y - 450) * 0.02)
        draw.line([(0, y), (canvas_w, y)], fill=(shade, shade + 2, shade + 1, 255))
        
    # Scale unit to fit beautifully in center
    target_h = int(canvas_h * 0.78)
    scale = target_h / unit.size[1]
    new_w = int(unit.size[0] * scale)
    new_h = int(unit.size[1] * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Position
    pos_x = (canvas_w - new_w) // 2
    pos_y = (canvas_h - new_h) // 2 + 15
    
    # Soft drop shadow
    shadow = create_drop_shadow(unit_scaled, blur=22, shadow_alpha=95)
    canvas.paste(shadow, (pos_x, pos_y + 15), shadow)
    
    # Paste real unit
    canvas.paste(unit_scaled, (pos_x, pos_y), unit_scaled)
    
    canvas.convert('RGB').save('assets/images/package_single.jpg', quality=95)
    print("Single pack built with real product!")

def build_duo_pack():
    unit = Image.open('assets/images/real_product_clean_alpha.png').convert('RGBA')
    unit = unit.crop(unit.getbbox())
    
    canvas_w, canvas_h = 1200, 900
    canvas = Image.new('RGBA', (canvas_w, canvas_h), (248, 250, 249, 255))
    
    draw = ImageDraw.Draw(canvas)
    for y in range(450, 900):
        shade = int(248 - (y - 450) * 0.02)
        draw.line([(0, y), (canvas_w, y)], fill=(shade, shade + 2, shade + 1, 255))
        
    scale = 0.65
    new_w, new_h = int(unit.size[0] * scale), int(unit.size[1] * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Unit 1 (Left slightly behind)
    pos1 = (160, 140)
    shadow1 = create_drop_shadow(unit_scaled, blur=20, shadow_alpha=80)
    canvas.paste(shadow1, (pos1[0], pos1[1] + 15), shadow1)
    canvas.paste(unit_scaled, pos1, unit_scaled)
    
    # Unit 2 (Right slightly forward)
    pos2 = (440, 180)
    shadow2 = create_drop_shadow(unit_scaled, blur=25, shadow_alpha=95)
    canvas.paste(shadow2, (pos2[0], pos2[1] + 18), shadow2)
    canvas.paste(unit_scaled, pos2, unit_scaled)
    
    canvas.convert('RGB').save('assets/images/package_duo.jpg', quality=95)
    print("Duo pack built with 2 real units!")

def build_trio_pack():
    unit = Image.open('assets/images/real_product_clean_alpha.png').convert('RGBA')
    unit = unit.crop(unit.getbbox())
    
    canvas_w, canvas_h = 1200, 900
    canvas = Image.new('RGBA', (canvas_w, canvas_h), (248, 250, 249, 255))
    
    draw = ImageDraw.Draw(canvas)
    for y in range(450, 900):
        shade = int(248 - (y - 450) * 0.02)
        draw.line([(0, y), (canvas_w, y)], fill=(shade, shade + 2, shade + 1, 255))
        
    scale = 0.58
    new_w, new_h = int(unit.size[0] * scale), int(unit.size[1] * scale)
    unit_scaled = unit.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Unit 1 (Left back)
    pos1 = (80, 150)
    shadow1 = create_drop_shadow(unit_scaled, blur=18, shadow_alpha=75)
    canvas.paste(shadow1, (pos1[0], pos1[1] + 14), shadow1)
    canvas.paste(unit_scaled, pos1, unit_scaled)
    
    # Unit 2 (Right back)
    pos2 = (560, 150)
    shadow2 = create_drop_shadow(unit_scaled, blur=18, shadow_alpha=75)
    canvas.paste(shadow2, (pos2[0], pos2[1] + 14), shadow2)
    canvas.paste(unit_scaled, pos2, unit_scaled)
    
    # Unit 3 (Center front)
    pos3 = (320, 200)
    shadow3 = create_drop_shadow(unit_scaled, blur=25, shadow_alpha=100)
    canvas.paste(shadow3, (pos3[0], pos3[1] + 20), shadow3)
    canvas.paste(unit_scaled, pos3, unit_scaled)
    
    canvas.convert('RGB').save('assets/images/package_trio.jpg', quality=95)
    print("Trio pack built with 3 real units!")

def build_hero_and_floating():
    unit = Image.open('assets/images/real_product_clean_alpha.png').convert('RGBA')
    unit = unit.crop(unit.getbbox())
    
    # 1. Hero Shot: 1200 x 820 dark luxury botanical aesthetic
    hero_w, hero_h = 1200, 820
    hero_bg = Image.new('RGBA', (hero_w, hero_h), (14, 30, 23, 255))
    draw = ImageDraw.Draw(hero_bg)
    
    # Radial dark green glow in center
    for r in range(600, 0, -6):
        alpha_val = int(255 * (1 - r / 600))
        g_val = int(30 + 40 * (1 - r / 600))
        draw.ellipse([600 - r, 410 - r, 600 + r, 410 + r], fill=(12, g_val, 20, 255))
        
    # Floating glowing particles
    np.random.seed(99)
    for _ in range(80):
        px = np.random.randint(50, 1150)
        py = np.random.randint(50, 780)
        pr = np.random.randint(2, 5)
        draw.ellipse([px-pr, py-pr, px+pr, py+pr], fill=(74, 222, 128, 140))
        
    scale_hero = 0.76
    hw, hh = int(unit.size[0] * scale_hero), int(unit.size[1] * scale_hero)
    unit_hero = unit.resize((hw, hh), Image.Resampling.LANCZOS)
    
    pos_hero = ((hero_w - hw) // 2, (hero_h - hh) // 2 + 10)
    shadow_hero = create_drop_shadow(unit_hero, blur=35, shadow_alpha=120)
    hero_bg.paste(shadow_hero, (pos_hero[0], pos_hero[1] + 25), shadow_hero)
    hero_bg.paste(unit_hero, pos_hero, unit_hero)
    
    hero_bg.convert('RGB').save('assets/images/hero_seed.jpg', quality=95)
    hero_bg.convert('RGB').save('assets/images/hhs_a1_3d_master.jpg', quality=95)
    hero_bg.convert('RGB').save('assets/images/capsule_macro.jpg', quality=95)
    print("Hero and floating visuals built with real product!")

if __name__ == '__main__':
    build_single_pack()
    build_duo_pack()
    build_trio_pack()
    build_hero_and_floating()
