from django.conf.urls import url
from base64encoder.views import BaseApp
from base64encoder import views as viewer

urlpatterns = [
        # url(r'^base/', views.intro, name="load topics in user section"),
        url(r'^home/', BaseApp.as_view(), name="load home page of portfolio"),
]