import moment from 'moment'
import "magnific-popup"

jQuery(document).ready(function ($) {


  $.magnificPopup.open({
    items: {
      src: $("#newsletter-popup"),
    },
    type: 'inline',
    closeBtnInside: true
  })

  $('#field_state').hide();

  $('#field_country_region').change(function () {
    if ($(this).val() === 'US') {
      $('#field_state').show();
    } else {
      $('#field_state').hide();
    }
  });

  // FORM SUBMISSION
  $("#choszn-newsletter-signup-awal-us").on("submit", function (e) {
    e.preventDefault();

    // Get all the form user submitted data and get it ready to be sent.
    const data = $(this).serialize();
    console.log('data', data)

    // POST all the data to the SMF submission endpoint URL.
    $.ajax({
      type: "POST",
      url: "https://subs.sonymusicfans.com/submit",
      dataType: "json",
      data: data,
      xhrFields: {
        withCredentials: false
      },
      success: function (data) {
        $.magnificPopup.open({
          items: {
            src: $("#thankyou-popup"),
          },
          type: 'inline',
          closeBtnInside: true
        })
      },
      error: function (err) {
        // Do things when submission has an error.
        alert("An error has occured!");
      }
    });
  });


  // Tourdate Import
  const eventArray = [

    {
      "datetime": "May 10",
      "venue": {
        "location": "Dallas, TX",
        "name": "Ruins",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://www.squadup.com/events/the-artit-the-gallery-tour-at-ruins-1?legacy=0"
      }
    },
    {
      "datetime": "May 13",
      "venue": {
        "location": "Los Angeles, CA",
        "name": "The Echo",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://concerts.livenation.com/theartit-artchives-the-gallery-tour-with-los-angeles-california-05-13-2024/event/0900606BF633421C"
      }
    },
    {
      "datetime": "May 15",
      "venue": {
        "location": "Vinyl",
        "name": "Atlanta, GA",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://www.ticketmaster.com/event/0E00606DEE303EEB"
      }
    },
    {
      "datetime": "May 16",
      "venue": {
        "location": "Washington, DC",
        "name": "Warehouse 1360",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://posh.vip/e/rb-n-friendz"
      }
    },
    {
      "datetime": "May 19",
      "venue": {
        "location": "Brooklyn, NY",
        "name": "The Sultan Room",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://dice.fm/partner/theartit/event/y5pkr-theartit-choszn-dee-gatti-19th-may-the-sultan-room-new-york-tickets?dice_id=2607144&dice_channel=web&dice_tags=organic&dice_campaign=TheARTI%24t&dice_feature=mio_marketing&_branch_match_id=1210314421909581964&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Q%2FJSHUMCvEsLgEAl5HwWh4AAAA%3D"
      }
    },
    {
      "datetime": "May 23",
      "venue": {
        "location": "Chicago, IL",
        "name": "The Promontory",
      },
      "offer":
      {
        "type": "Tickets",
        "url": "https://www.eventbrite.com/e/theartit-presents-the-artchives-gallery-tour-tickets-861652815767?aff=oddtdtcreator"
      }
    },
  ]

  const events = $('#tour-dates');
  let html = '';
  let n = 0
  if (eventArray.length) {
    for (let event of eventArray) {
      n++
      html += `
      <div class="event-group">
      <div class="event-date">${event.datetime}</div>
      <div class="event-venue-location">
      <div class="event-venue">${event.venue.name}</div>
      <div class="event-location">${event.venue.location}</div>
      </div>
      <div class="event-links">
      <a href="${event.offer.url}" target="_blank" class="link btn">${event.offer.type}</a>
      </div>
      </div>
      `
    }
    events.html(html);
  } else {
    events.html('<span class="no-events">Check back soon for new shows!</span>');
  }



  // NAVIGATION
  $("#music, #tour, #merch").hide();

  function showSection(sectionToShow) {
    $("#home, #music, #tour, #merch").hide();
    $(sectionToShow).show();
  }

  $(".set-home").on('click', function () {
    showSection("#home");
  });

  $(".set-music").on('click', function () {
    showSection("#music");
  });

  $(".set-tour").on('click', function () {
    showSection("#tour");
  });

  $(".set-merch").on('click', function () {
    showSection("#merch");
  });

});