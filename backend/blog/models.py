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
