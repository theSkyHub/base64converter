from django.shortcuts import render
from django.views import View
from converter import settings
# Create your views here.
class BaseApp(View):
    def get(self,request):
            return render(request, 'index.html', {
    })