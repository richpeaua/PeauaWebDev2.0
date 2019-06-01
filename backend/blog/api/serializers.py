from rest_framework import serializers
from rest_framework.exceptions import ParseError
from blog.models import Post, Project
from taggit_serializer.serializers import TagListSerializerField, TaggitSerializer

'''class TagListSerializer(serializers.Field):
   def to_internal_value(self, data):
        if type(data) is not list:
            raise ParseError("expected a list of data")
        return data

    def to_representation(self, obj):
        if type(obj) is not list:
            return [tag.name for tag in obj.all()]
        return obj'''


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
	tags = TagListSerializerField()
	
	class Meta:
		model = Post
		fields = ('id', 'title', 'body', 'published', 'tags')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'created', 'image_path', 'page_path')