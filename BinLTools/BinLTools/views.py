from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def digitconvert(request):
    return render(request, "digitconverter.html")

def reactiontest(request):
    return render(request, "reaction.html")
