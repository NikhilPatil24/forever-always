import Types "types/rsvp";
import RSVPMixin "mixins/rsvp-api";
import List "mo:core/List";

actor {
  let submissions = List.empty<Types.RSVPRecord>();
  include RSVPMixin(submissions);
};
