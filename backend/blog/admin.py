from django.contrib import admin
from django.db import models
from .models import Post, Project
from pagedown.widgets import AdminPagedownWidget

class PostAdmin(admin.ModelAdmin):
	formfield_overrides = {
	    models.TextField: {'widget': AdminPagedownWidget},
	}

admin.site.register(Post, PostAdmin)

admin.site.register(Project)