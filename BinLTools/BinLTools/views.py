from django.shortcuts import render
from .models import Message
from .forms import MessageForm

def index(request):
    return render(request, "index.html")

def digitconvert(request):
    return render(request, "digitconverter.html")

def reactiontest(request):
    return render(request, "reaction.html")


def message_board(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = MessageForm()

    messages = Message.objects.order_by('-created_at')
    context = {
        'form': form,
        'messages': messages,
    }
    return render(request, 'message_board.html', context)
