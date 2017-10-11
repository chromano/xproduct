from django.contrib.postgres.fields import ArrayField
from django.db import models


class CrossProductResult(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    vector1 = ArrayField(models.FloatField(), size=3)
    vector2 = ArrayField(models.FloatField(), size=3)
    result = ArrayField(models.FloatField(), size=3)

    @classmethod
    def create(cls, u, v):
        result = [
            u[1] * v[2] - u[2] * v[1],
            u[2] * v[0] - u[0] * v[2],
            u[0] * v[1] - u[1] * v[0]
        ]

        return cls(vector1=u, vector2=v, result=result)
