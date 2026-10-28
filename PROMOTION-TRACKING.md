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


## Service enquiries and booked work

The service-request page now embeds the official Google Forms enquiry form. It accepts four required fields: name, preferred contact, service and requirements. It does not require a Google sign-in or a WhatsApp message. The selected service is passed from the referring service page. An always-visible link opens the same form directly if the embed cannot load.

Google Forms is the source of truth for form submissions. Its linked private response sheet and the owner's new-response email notifications are enabled. A cross-origin Google Form cannot reliably report completion to the surrounding website; do not label an iframe load or form-open click as a submitted lead.

Analytics uses the existing property G-KG6CEP3WVG. `service_type` distinguishes website development, computer support, training, procurement, application assistance and general enquiries. `project_example_click` measures opening the two selected portfolio links; `enquiry_form_open` measures opening the direct Google Form link. Existing WhatsApp/phone/email click and WhatsApp handoff events remain separate.

For actual bookings, record one row per customer enquiry in the booking tracker. Reuse the same row if a customer uses both WhatsApp and the form. Stages are New, Contacted, Quoted, Booked, Completed, Lost and Test. Mark a job Booked only after the customer agrees to the work; record payments separately from the agreed job value. Exclude clearly labelled website tests from lead totals.

Review Search Console impressions and clicks for each service page over matching 28-day periods. Compare them with actual enquiries and confirmed jobs for that period. Search Console hides some low-volume queries, so query-table totals may differ from the headline totals. Neither search clicks nor contact clicks are confirmed customers.
