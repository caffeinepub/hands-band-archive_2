import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";

actor {
  type BandId = Nat;

  type Band = {
    name : Text;
    tagline : Text;
    email : Text;
    location : Text;
    genres : [Text];
    foundingYear : Nat;
  };

  var idCounter : BandId = 0;

  let bands = Map.empty<BandId, Band>();

  public shared ({ caller }) func addBand(name : Text, tagline : Text, email : Text, location : Text, genres : [Text], foundingYear : Nat) : async BandId {
    let id = idCounter;
    let band : Band = {
      name;
      tagline;
      email;
      location;
      genres;
      foundingYear;
    };
    bands.add(id, band);
    idCounter += 1;
    id;
  };

  public query ({ caller }) func getBand(id : BandId) : async ?Band {
    bands.get(id);
  };

  public query ({ caller }) func getAllBands() : async [Band] {
    bands.values().toArray();
  };
};
