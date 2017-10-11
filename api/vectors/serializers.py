from marshmallow import validate
from rest_marshmallow import Schema, fields

from .models import CrossProductResult


class CrossProductSerializer(Schema):
    id = fields.Integer(read_only=True)
    created = fields.DateTime(read_only=True)
    vector1 = fields.List(fields.Number(), validate=validate.Length(equal=3),
                          required=True)
    vector2 = fields.List(fields.Number(), validate=validate.Length(equal=3),
                          required=True)
    result = fields.List(fields.Number(), validate=validate.Length(equal=3),
                         read_only=True)

    def create(self, data):
        result = CrossProductResult.create(data['vector1'], data['vector2'])
        result.save()

        return result
