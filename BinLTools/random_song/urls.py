from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('random_song_recommdation/', include('polls.urls')),
    path('admin/', admin.site.urls),
]