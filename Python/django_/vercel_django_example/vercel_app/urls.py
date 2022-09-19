# vercel-django-example/example/urls.py
# https://github.com/jayhale/vercel-django-example/blob/main/example/urls.py#L7

from django.urls import path
from example.views import *

urlpatterns = [
    path('', index),
    path('chess', chess),
    path('calculator', calculator),
    path('maze', maze),
    path('sass_', sass_),
    path('codepen', codepen),
    path('tilt_maze', tilt_maze),
    path('dino', dino),
    path('solitaire', solitaire),
    path('sudoku', sudoku),
    path('puzzles', puzzles),
    path('tic_tac_toe', tic_tac_toe),
    path('clock', clock),
    path('hangman', hangman),
    path('virtual_keyboard', virtual_keyboard),
    
]