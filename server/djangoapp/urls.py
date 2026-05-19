from django.urls import path
from . import views

urlpatterns = [

    path(
        route='login',
        view=views.login_user,
        name='login'
    ),

    path(
        route='logout',
        view=views.logout_request,
        name='logout'
    ),

]