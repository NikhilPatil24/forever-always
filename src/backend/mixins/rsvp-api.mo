import Types "../types/rsvp";
import RSVPLib "../lib/rsvp";
import List "mo:core/List";

mixin (submissions : List.List<Types.RSVPRecord>) {
  public func submitRSVP(submission : Types.RSVPSubmission) : async { #ok : Text; #err : Text } {
    RSVPLib.submit(submissions, submission);
  };

  public query func getRSVPs() : async [Types.RSVPRecord] {
    RSVPLib.getAll(submissions);
  };
};
