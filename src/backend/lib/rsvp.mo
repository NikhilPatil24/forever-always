import Types "../types/rsvp";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    submissions : List.List<Types.RSVPRecord>,
    submission : Types.RSVPSubmission,
  ) : { #ok : Text; #err : Text } {
    if (submission.name.size() == 0) {
      return #err("Name is required.");
    };
    if (submission.email.size() == 0) {
      return #err("Email is required.");
    };
    if (submission.guestCount < 1 or submission.guestCount > 20) {
      return #err("Guest count must be between 1 and 20.");
    };
    let record : Types.RSVPRecord = {
      name = submission.name;
      email = submission.email;
      guestCount = submission.guestCount;
      dietary = submission.dietary;
      songRequest = submission.songRequest;
      submittedAt = Time.now();
    };
    submissions.add(record);
    #ok("Thank you! Your RSVP has been received.");
  };

  public func getAll(submissions : List.List<Types.RSVPRecord>) : [Types.RSVPRecord] {
    submissions.toArray();
  };
};
