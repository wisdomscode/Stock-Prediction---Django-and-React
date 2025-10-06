from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response


class RegsiterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        response = {
            'status': 'Request was permitted'
        }
        return Response(response)
