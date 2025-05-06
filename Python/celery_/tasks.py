# tasks.py

from celery import Celery

# Create a Celery instance with a broker (e.g., Redis)
app = Celery('tasks', broker='redis://localhost:6379/0')

@app.task
def add(x, y):
    """A simple task that adds two numbers."""
    return x + y

@app.task
def multiply(x, y):
    """A simple task that multiplies two numbers."""
    return x * y