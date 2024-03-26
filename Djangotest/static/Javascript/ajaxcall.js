$(document).on('click', '.like-button', function() {
    var postId = $(this).data('post-id');
    var likeButton = $(this);
    $.ajax({
        url: '/like_post/' + postId + '/',
        method: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(data) {
            $('.like-button[data-post-id="' + postId + '"] .likes-amount').text(data.likes);
            if (data.liked) {
                likeButton.addClass('liked');
            } else {
                likeButton.removeClass('liked');
            }
        }
    });
});

$(document).ready(function() {
    $('.like-button').each(function() {
        var postId = $(this).data('post-id');
        var likesAmountElement = $(this).find('.likes-amount');
        $.ajax({
            url: '/like_post/' + postId + '/',
            method: 'GET',
            success: function(data) {
                likesAmountElement.text(data.likes);
            }
        });
    });
});
$('#search-input').on('input', function() {
    var query = $(this).val();
    if (query.length > 0) {  // Only make the AJAX call if the input field is not empty
        $.ajax({
            url: '/search_people/',
            data: {
                'query': query
            },
            success: function(data) {
                console.log(data);
                var results = '';
                if (data.length === 0) {
                    results = 'No person with this name';
                } else {
                    $.each(data, function(index, person) {
                        results += '<p>' + person.first_name + ' ' + person.last_name + '<button class="invite-button" data-username="' + person.username + '" style="border: none; background: none; padding: 0; transition: transform 0.3s ease; margin-inline-start: 5%;"><i class="fa-solid fa-plus"></i></button></p>';
                    });
                }
                $('#search-results').html(results);
            }
        });
    } else {
        $('#search-results').html('');  // Clear the results when the input field is empty
    }
});
$(document).on('click', '.invite-button', function() {
    var username = $(this).data('username');
    var groupName = window.location.pathname.split('/')[2];
    $.ajax({
        url: '/invite_user/',
        method: 'POST',
        data: {
            'username': username,
            'group_name': groupName
        },
        success: function(response) {
            alert(response.message);
        }
    });
});

$(document).ready(function() {
    $.ajax({
        url: '/get_pending_invitations/',
        success: function(data) {
            var results = '';
            $.each(data, function(index, invitation) {
                results += '<li>' + invitation.group_name + '<button style="cursor: pointer;border: none; background: none; padding: 0; transition: transform 0.3s ease; margin-inline-start: 5%;" class="accept-invitation" data-group-name="' + invitation.group_name + '">Accept</button><button style ="border: none; background: none; padding: 0; transition: transform 0.3s ease; margin-inline-start: 5%;cursor: pointer;" class="reject-invitation" data-group-name="' + invitation.group_name + '">Reject</button> </li>';
            });
            $('#NotificationsMenu .dropdown-menu .Invitations_group').html(results);
        }
    });
});


// CSRF token setup on jquery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
var csrftoken = getCookie('csrftoken');
$(document).on('click', '.accept-invitation', function() {
    var groupName = $(this).data('group-name');
    $.ajax({
        url: '/accept_invitation/',
        method: 'POST',
        data: {
            'group_name': groupName
        },
        success: function(response) {
            alert(response.message);
            location.reload();
        }
    });
});
// CSRF token setup on jquery end here


$(document).on('click', '.reject-invitation', function() {
    var groupName = $(this).data('group-name');
    $.ajax({
        url: '/reject_invitation/',
        method: 'POST',
        data: {
            'group_name': groupName
        },
        success: function(response) {
            alert(response.message);
            location.reload();
        }
    });
});
$(document).on('click', '.join-group', function() {
    var groupName = $(this).data('group-name');
    $.ajax({
        url: '/join_group/',
        method: 'POST',
        data: {
            'group_name': groupName
        },
        success: function(response) {
            alert(response.message);
            location.reload();
        }
    });
});

$(document).on('click', '.leave-group', function() {
    var groupName = $(this).data('group-name');
    $.ajax({
        url: '/leave_group/',
        method: 'POST',
        data: {
            'group_name': groupName
        },
        success: function(response) {
            alert(response.message);
            location.reload();
        }
    });
});