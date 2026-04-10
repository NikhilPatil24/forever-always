module {
  public type RSVPSubmission = {
    name : Text;
    email : Text;
    guestCount : Nat;
    dietary : Text;
    songRequest : Text;
  };

  public type RSVPRecord = {
    name : Text;
    email : Text;
    guestCount : Nat;
    dietary : Text;
    songRequest : Text;
    submittedAt : Int;
  };
};
