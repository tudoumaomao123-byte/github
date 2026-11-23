mixin () {
  public query func getApiDoc() : async Text {
    "# Dashboard Backend API\n" #
    "\n" #
    "## Purpose\n" #
    "\n" #
    "This canister backs a public, read-only Chinese data dashboard (数据看板). All dashboard figures are bundled in the frontend; this backend stores NO dashboard data and exposes no domain endpoints. To read the dashboard content, open the app's web page; no canister method returns it.\n" #
    "\n" #
    "The backend only provides template infrastructure: Internet Identity sign-in/role bookkeeping and an OQL query surface that currently registers zero entities.\n" #
    "\n" #
    "## Public methods\n" #
    "\n" #
    "### Access control (MixinAuthorization)\n" #
    "\n" #
    "- `_internet_identity_sign_in_start() : async Blob` (update) - issues a sign-in attribute challenge. Used by the app's frontend sign-in flow.\n" #
    "- `_internet_identity_sign_in_finish() : async Result<(), Error>` (update) - registers the caller (see below), then verifies the challenge attributes; returns `#err` if verification fails. Registration happens even when verification returns `#err`.\n" #
    "- `_initialize_access_control() : async ()` (update) - registers the caller. The first non-anonymous principal ever registered becomes `#admin`; every later new principal becomes `#user`. Calling again for an already-registered principal changes nothing. Anonymous callers are silently ignored (no registration, no error).\n" #
    "- `getCallerUserRole() : async UserRole` (query) - returns `#admin`, `#user` or `#guest`. Anonymous caller gets `#guest`. A signed-in but unregistered caller traps with `User is not registered`.\n" #
    "- `isCallerAdmin() : async Bool` (query) - `true` only for an admin. Anonymous gets `false`; an unregistered signed-in caller traps with `User is not registered`.\n" #
    "- `assignCallerUserRole(user : Principal, role : UserRole) : async ()` (update) - admin only; sets the role of `user` (overwrites any existing role). Non-admins trap with `Unauthorized: Only admins can assign user roles`; unregistered callers trap with `User is not registered`.\n" #
    "\n" #
    "`UserRole` is the variant `{ #admin; #user; #guest }`.\n" #
    "\n" #
    "### OQL (Expose)\n" #
    "\n" #
    "- `schema() : async Text` (query) - JSON schema of queryable entities visible to the caller. Currently no entities are registered, so the schema lists none.\n" #
    "- `execute(qJson : Text) : async Result` (query) - runs a JSON OQL query. With zero registered entities there is nothing to query; any entity reference finds nothing. Malformed JSON traps with a message starting `OQL: invalid query`.\n" #
    "\n" #
    "## Authentication and identity\n" #
    "\n" #
    "- No method needs a signed caller to view the dashboard: the dashboard is public and served from the frontend.\n" #
    "- Methods that need a signed (non-anonymous) caller to have any effect: `_initialize_access_control`, `_internet_identity_sign_in_finish`, `assignCallerUserRole`. Role queries from a signed but unregistered caller trap.\n" #
    "- The app's frontend pins an Internet Identity derivation origin, published at `/.well-known/ii-derivation-origin` when available. An agent already holding the user's Internet Identity authorization derives the correct per-app principal against that origin (for example `icp identity link web <name> --app <host>`). Warning: such a delegation acts with the user's full authority in this app until it expires.\n" #
    "- A principal derived against a different origin is a different principal from the one the frontend registered.\n" #
    "\n" #
    "## Registration prerequisite\n" #
    "\n" #
    "Role-guarded calls (`getCallerUserRole`, `isCallerAdmin`, `assignCallerUserRole`) require registration. Registration happens only when a caller signs in through the app's own frontend, or when a direct API caller calls `_initialize_access_control` once as a signed-in caller before any role-guarded call (guarded queries included). A principal that never did either is unregistered, even if it belongs to the app's owner, and receives the trap `User is not registered`. The first principal ever registered receives `#admin`; all later ones receive `#user`.\n" #
    "\n" #
    "## Units and encodings\n" #
    "\n" #
    "- No timestamps, amounts or identifiers are stored by this backend.\n" #
    "- `_internet_identity_sign_in_start` returns an opaque challenge `Blob`; do not interpret it.\n" #
    "- `execute` takes the query as a JSON string, not a Candid record.\n" #
    "\n" #
    "## Lifecycle and polling\n" #
    "\n" #
    "There are no asynchronous jobs or state transitions to poll. Dashboard content changes only when the frontend is redeployed; polling this canister will never reveal new dashboard data.\n" #
    "\n" #
    "## Mutation retry safety\n" #
    "\n" #
    "- `_initialize_access_control` is idempotent: retrying never changes an existing role. Note the first-caller-becomes-admin rule is irreversible except by an admin reassigning roles.\n" #
    "- `assignCallerUserRole` is idempotent for identical arguments; it overwrites the target's role.\n" #
    "- `_internet_identity_sign_in_start` issues a fresh challenge each call; retrying is safe.\n" #
    "\n" #
    "## Errors and gotchas\n" #
    "\n" #
    "- Errors from access control are traps (opaque rejects), not result variants; match on the quoted messages.\n" #
    "- Do not look for lead, board or chart endpoints here: none exist. The data is static in the frontend and shown as in the source PDFs, with unconfirmed values labelled 待核实.\n" #
    "- OQL returns nothing useful until entities are registered; an empty schema is expected, not an error."
  };
};
