# Homepage promotion and measurement

The homepage features three existing Moses TechFix Solutions Shorts and a personal introduction to Mwesigwa Moses. Videos use click-to-load YouTube privacy-enhanced embeds and retain direct YouTube links if JavaScript or embedding is unavailable.

## Where to see results

Use the existing Google Analytics property for the website (web stream `G-KG6CEP3WVG`). Open Google Analytics → Reports → Realtime and look for the event names below. Use the Events report for date-range comparisons after processing. Initial reporting can take 24–48 hours; Realtime is the first place to check.

| Event | What it measures |
| --- | --- |
| `youtube_click` | Opening a featured video or the channel on YouTube. |
| `video_embed_open` | Loading an embedded player. This does not assert playback or a completed watch. |
| `service_request_click` | Opening the service request form. |
| `service_enquiry_click` | Clicking a WhatsApp, phone or email contact link. |
| `service_enquiry_handoff` | Submitting a valid WhatsApp request form to prepare the message. The visitor still chooses whether to send it. |

The earlier `generate_lead` event counted contact clicks. New interactions use the more precise names above. Do not add counts across these events and call the total unique enquiries: one visitor may click multiple buttons. Confirm actual enquiries and bookings from received messages and agreed work.

## Compare before paying for advertising

1. Review the first seven complete days, then the following seven days, using the same event names and date lengths.
2. Compare homepage visitors, YouTube clicks, service-request opens and contact clicks. Relate these to actual enquiries received in WhatsApp, phone and email.
3. Look for which topic and placement attracts interest; improve the relevant page or video before choosing an advertising budget.
4. For a ratio, use distinct users who triggered the event divided by homepage users, rather than raw event counts. This avoids treating repeated clicks as additional people.

`link_location` identifies placements such as `featured_channel`, `featured_windows`, `featured_laptop`, `featured_travel` and `meet_moses`. `video_id` identifies the selected video. Parameters can be inspected in Realtime or DebugView; create matching event-scoped custom dimensions in Google Analytics to use them in longer-term explorations.

## Privacy and testing

No form contents, WhatsApp message text, email addresses or phone numbers are added to the custom analytics events. Page URLs and referrers omit their query strings. Advertising personalization is disabled in this tag configuration. Preview hosts, Do Not Track and Global Privacy Control are excluded, so test previews do not inflate production counts. Browser privacy tools and visitors' choices can reduce the measurable audience.

Tracking starts when this change is published and records future activity; the new events cannot reconstruct past clicks. No paid advertising has been enabled.
