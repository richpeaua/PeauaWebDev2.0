from django.db import models
from taggit.managers import TaggableManager

# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length=120)
	body = models.TextField()
	published = models.DateField()
	tags = TaggableManager()

	def __str__(self):
		return self.title

class Project(models.Model):
	title = models.CharField(max_length=120)
	created = models.DateField()
	image_path = models.CharField(max_length=120)
	page_path = models.CharField(max_length=120)

	def __str__(self):
		return self.title