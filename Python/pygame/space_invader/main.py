#to run the file: python main.py
                        # Space Invaders
import pygame

# Initialise the pygame
pygame.init()

# Create a screen
screen = pygame.display.set_mode((800,600))  #inside is a tuple (width,height)

#Title and Icon
pygame.display.set_caption("Space Invaders")
icon = pygame.image.load('ufo.png')
pygame.display.set_icon(icon)

#Player
player_img = pygame.image.load('player.png')
playerX = 230
playerY = 410

def player(playerX,playerY):
    screen.blit(pygame.transform.scale(player_img,(40,40)),(playerX,playerY))  #resize the image

# Game loop
running = True
while running:   # to make the screen stay for longer time, 
              # but since it hangs, we close it from task manager ,(OR) see the code below
    # RGB values
    screen.fill((255,0,0))  #red  (screen.fill should be above everything)
    '''playerX -= 0.1
    playerY -= 0.1'''
    for event in pygame.event.get():
        if(event.type ==pygame.QUIT):
            running = False
        
        if(event.type==pygame.KEYDOWN):
            
    print(playerX,playerY)
    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            running = False


    player(playerX,playerY)
    #update the screen display
    pygame.display.update()