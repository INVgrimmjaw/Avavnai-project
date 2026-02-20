from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # This grabs anything starting with 'api/' and forwards it to your new file
    path('api/', include('api.urls')), 
]