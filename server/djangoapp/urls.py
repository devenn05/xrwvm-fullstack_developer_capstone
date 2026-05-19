from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [

    path(
        'login',
        views.login_user,
        name='login'
    ),

    path(
        'logout',
        views.logout_request,
        name='logout'
    ),

    path(
        'get_cars',
        views.get_cars,
        name='getcars'
    ),

    path(
        'dealers',
        views.get_dealers,
        name='dealers'
    ),

    path(
        'dealers/<str:state>',
        views.get_dealers_by_state,
        name='dealerbystate'
    ),

    path(
        'dealer/<int:dealer_id>',
        views.get_dealer_details,
        name='dealer_details'
    ),

    path(
        'review/<int:dealer_id>',
        TemplateView.as_view(
            template_name='Review.html'
        ),
        name='review'
    ),

    path(
        'reviewsuccess',
        TemplateView.as_view(
            template_name='ReviewSuccess.html'
        )
    ),
]