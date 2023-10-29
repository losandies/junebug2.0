# from django.forms import ValidationError
# from rest_framework import serializers
# from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()


# class UserCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ("first_name", "last_name", "email", "password")

#     def validate(self, data):
#         user = User(**data)
#         try:
#             validate_password(data["password"], user)
#         except ValidationError as e:
#             serializer_errors = serializers.as_serializer_error(e)
#             raise ValidationError({"password": serializer_errors["non_field_errors"]})

#         return data

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             first_name=validated_data["first_name"],
#             last_name=validated_data["last_name"],
#             email=validated_data["email"],
#             password=validated_data["password"],
#         )
#         return user


# # class UserLoginSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = User
# #         fields = ("email", "password")

# #     def validate(self, data):
# #         email = data.get("email", None)
# #         password = data.get("password", None)

# #         user = authenticate(email=email, password=password)
# #         if not user:
# #             raise serializers.ValidationError(
# #                 "A user with this email and password is not found"
# #             )

# #         return user


# class UserSerializer(serializers.ModelSerializer):
#     id = serializers.IntegerField()

#     class Meta:
#         model = User
#         fields = ("first_name", "last_name", "email", "id")


from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name", "password"]
