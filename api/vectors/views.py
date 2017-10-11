from rest_framework import mixins, viewsets
from rest_framework.decorators import list_route

from .models import CrossProductResult
from .serializers import CrossProductSerializer


class CrossProductView(mixins.CreateModelMixin,
                       mixins.ListModelMixin,
                       viewsets.GenericViewSet):
    queryset = CrossProductResult.objects.all()
    serializer_class = CrossProductSerializer

    def list(self, *args, **kwargs):
        result = super(CrossProductView, self).list(*args, **kwargs)
        return result
