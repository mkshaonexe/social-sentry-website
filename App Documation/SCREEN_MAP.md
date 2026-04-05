# SocialSentry — Screen Map
> Every screen in the app, with every button, option, and section it contains.

---

## 1. ONBOARDING SCREENS (`OnboardingCoordinatorV2`)

### Screen: Welcome / Splash
| Element | Type | Action |
|---|---|---|
| SocialSentry logo & tagline | Display | — |
| "Get Started" | Button | → Next onboarding step |

### Screen: Usage Stats Permission
| Element | Type | Action |
|---|---|---|
| Explanation text | Display | — |
| "Grant Permission" | Button | Opens Android Usage Access settings |
| "Skip for now" | Button | Advances to next step (limited functionality) |

### Screen: Accessibility Permission
| Element | Type | Action |
|---|---|---|
| Explanation text | Display | — |
| "Open Settings" | Button | Opens Android Accessibility settings |
| "Next" | Button | Advances (if permission already granted) |

### Screen: Notification Permission
| Element | Type | Action |
|---|---|---|
| Explanation text | Display | — |
| "Allow Notifications" | Button | Requests notification permission |
| "Skip" | Button | Advances without granting |

### Screen: Goal Setting
| Element | Type | Action |
|---|---|---|
| Goal options (chips) | Selectable | Study Focus / Digital Detox / Productivity / etc. |
| "Continue" | Button | Saves goal, advances |

### Screen: Free vs Pro Comparison
| Element | Type | Action |
|---|---|---|
| `CompareTable` (12 rows) | Display | Shows Free vs Pro features |
| "Continue Free" | Button | Completes onboarding as free user |
| "Upgrade to PRO" | Button | → Paywall Flow |

### Screen: Onboarding Complete
| Element | Type | Action |
|---|---|---|
| Completion animation | Display | — |
| "Start Using SocialSentry" | Button | → Main App (Home Screen) |

---

## 2. HOME SCREEN — My Brain (`MyBrainScreen`)
**Route:** `home` | **Bottom Nav:** Brain icon

### Top Bar
| Element | Type | Action |
|---|---|---|
| "My Brain" title | Display | — |
| Menu / Hamburger icon (top-right) | Button | → Main Menu Screen |

### Main Content
| Element | Type | Action |
|---|---|---|
| **Dopamine Score Ring** | Animated circle | Display — shows score 0–100 |
| **Cognitive Score** | Number display | — |
| **Brain State Label** | Text (e.g., "Recovering") | — |
| **Usage Summary Card** | Display | Today's total screen time |
| **Prescription Card** | Display | AI advice based on brain state |
| **App Usage Breakdown** | List | Top 5 apps with usage bars |
| **Strike / Streak counter** | Display | Consecutive clean days |
| **Play / Commit button** | Button | → Solo Leveling / Contribution Screen |
| **"View Details"** (usage card) | Button | → Usage Stats Screen |
| **"Set Up Blocking"** / Shield CTA | Button | → Block Screen |

### Bottom Navigation Bar (Floating Glass Pill)
| Tab | Icon | Action |
|---|---|---|
| **To Do** | Checklist (✅) | → Todo Screen |
| **Home** | Brain (🧠) | Stay on Home / → Home Screen |
| **Community** | Globe (🌐) | → Community Screen |
| **Block** | Shield (🛡️) | → Block Screen |
| **Profile** (Top Right) | Person (👤) | → Account & Settings Screen |


---

## 3. BLOCK SCREEN (`BlockScreen`)
**Route:** `block` | **Bottom Nav:** Shield icon

### Top Bar
| Element | Type | Action |
|---|---|---|
| "Block" title | Display | — |
| Segmented tabs | Tab switcher | Switch between sub-sections |

### Sub-Section: Shorts Blocker
| Element | Type | Action |
|---|---|---|
| **YouTube Shorts** toggle | Switch | ON/OFF — blocks YouTube Shorts |
| **Instagram Reels** toggle | Switch | ON/OFF — blocks Instagram Reels |
| **Facebook Reels** toggle | Switch | ON/OFF — blocks Facebook Reels |
| **TikTok** toggle | Switch | ON/OFF — blocks TikTok entirely |
| Status indicator | Display | Shows if Accessibility Service is active |
| "Grant Accessibility" (if missing) | Button | Opens Android Accessibility settings |

### Sub-Section: App Limits
| Element | Type | Action |
|---|---|---|
| **+ Add App** button | Button | → `AppPickerDialog` (search & select app) |
| App limit row (per added app) | Display | App icon + name + daily limit time |
| Time limit field (per app) | Input | Set max daily minutes |
| **Delete / Remove** (per app) | Button | Removes that app's limit |
| Limit reached → full-screen block | Auto | → `AppLimitBlockActivity` (overlay) |

### Sub-Section: Schedule Blocker (`ScheduleBlockerScreen`)
| Element | Type | Action |
|---|---|---|
| **Enable Schedule** toggle | Switch | ON/OFF — activates time-based blocking |
| **Start Time** picker | Time picker | Set blocking start hour |
| **End Time** picker | Time picker | Set blocking end hour |
| **Day selectors** (Mon–Sun) | Toggle chips | Select which days are active |
| Schedule summary | Display | Shows current active schedule |

### Sub-Section: Website Blocker (DNS)
| Element | Type | Action |
|---|---|---|
| **Enable DNS Protection** toggle | Switch | Turn VPN-based DNS on/off |
| "Set Up DNS" | Button | → `DnsProtectionSetupActivity` |
| Blocked categories list | Display | Shows what categories are blocked |

### Dialogs from Block Screen
| Dialog | Trigger |
|---|---|
| `AppPickerDialog` | Tap "+ Add App" |
| `PrimeModePermissionDialog` | PRO feature tapped without permissions |
| `EmergencyCodeDialog` | Override bypass during active block |
| Paywall overlay | PRO-only feature tapped without subscription |

---

## 4. COMMUNITY SCREEN (`CommunityScreen`)
**Route:** `community` | **Bottom Nav:** Globe icon  
**Requires:** Google Sign-In (shows login card if not authenticated)

### Top Bar
| Element | Type | Action |
|---|---|---|
| "Community" / "Global Chat" / "Report Problem" title | Display | Changes per section |
| Back arrow | Button | Returns to previous section, or exits if on Landing |
| Refresh icon (Global Chat only) | Button | Re-fetches messages |
| **Help** button (pill) | Button | → `HelpBottomSheet` |

### `HelpBottomSheet` options
| Option | Action |
|---|---|
| "Report a Problem" | → Report Problem section |
| "Share an Idea" | → Report Problem section |

---

### Section: Landing Page (default)
| Element | Type | Action |
|---|---|---|
| **Global Chat Card** | Card/Button | → Global Chat section |
| **User Commits Feed** | Scrollable list | Shows community posts |
| Strike days display | Display | Your current streak |

#### Each Commit Card (in feed)
| Element | Type | Action |
|---|---|---|
| User avatar | Display | — |
| Username + Rank badge | Display | — |
| Post content text | Display | — |
| Upvote count | Display | — |
| **Upvote button** | Button | Upvotes post (PRO required) |
| **Comment count** | Display | — |
| **Tap card** | Action | → CommitDetailScreen (PRO required, else paywall) |
| **3-dot menu** | Button | Opens options dropdown |

#### 3-dot Menu Options
| Option | Who sees it | Action |
|---|---|---|
| Hide this commit | All users | Removes post from local feed |
| Block user | All users | Filters that user's posts locally |
| Pin post | Admin only | Pins post to top of feed |
| Unpin post | Admin only | Unpins previously pinned post |
| Edit post | Admin only | Opens edit dialog |
| Delete post | Admin only | Removes post permanently from Supabase |

---

### Section: Commit Detail Screen (inline, not a route)
| Element | Type | Action |
|---|---|---|
| Back arrow | Button | → Returns to Landing |
| Full post content | Display | — |
| Comment list | Scrollable list | All comments with avatars |
| **Comment text field** | Input | Type a comment |
| **Send button** | Button | Posts comment to Supabase |

---

### Section: Global Chat
| Element | Type | Action |
|---|---|---|
| Chat messages list | Scrollable | Real-time messages from all users |
| Message bubble (own) | Display | Right-aligned |
| Message bubble (others) | Display | Left-aligned |
| **Swipe right on message** | Gesture | Quote/reply to that message |
| **Message text field** | Input | Type a chat message |
| **Send button** | Button | Sends message (real-time via Supabase) |
| Timestamp on each message | Display | "Mar 22 01:46" format |

---

### Section: Report Problem
| Element | Type | Action |
|---|---|---|
| Problem description field | Text input | Describe the bug/issue |
| Category selector | Dropdown | Bug / Feature Request / Other |
| **Submit** button | Button | Posts report to Supabase |

---

## 5. PROFILE INSIGHTS SCREEN (`ProfileScreen`)
**Route:** `profile`  
**Access:** Account & Settings → profile card tap, OR Account & Settings → Insights icon (top bar)

### Top Bar
| Element | Type | Action |
|---|---|---|
| "Profile Insights" title | Display | — |
| Person icon (top-right) | Button | → Account & Settings Screen |

### Content Sections
| Section | Type | Content |
|---|---|---|
| **Stats Radar Chart** | Animated chart | 6 axes: STR / DEX / INT / WIS / CHA / CON |
| **Skill Points card** | Animated bars | Writing / Financial / Learning / Coding |
| **Activity Bar Chart** | Chart | Last 4 days screen time |
| **XP Goal card** | Progress bar | Current XP / 2000 XP goal |
| **Contribution Heatmap** | Grid | GitHub-style last 5 months activity |

*(No interactive buttons in this screen — all display only)*

---

## 6. ACCOUNT & SETTINGS SCREEN (`CodeProfileScreen`)
**Route:** `code_profile` | **Bottom Nav:** Person icon

### Top Bar
| Element | Type | Action |
|---|---|---|
| "Account & Settings" title | Display | — |
| Back arrow | Button | → Previous screen |
| Insights icon (top-right) | Button | → Profile Insights Screen |

### Profile Card
| Element | Type | Action |
|---|---|---|
| User avatar / Ranking badge | Display | — |
| Display name | Display | — |
| @handle | Display | — |
| Star rating | Display | — |
| Tier / Rank name | Display | — |
| XP progress bar | Display | — |
| XP text ("User current karma is X xp gold") | Display | — |
| **Tap Profile Card** | Action | → Profile Insights Screen |
| **Edit (pencil) icon** | Button | → `EditProfileDialog` |
| **"Continue with Google"** (if not signed in) | Button | Triggers Google Sign-In |
| **"Karma"** link | Button | Analytics event logged |
| **"XP Goal Benefits"** link | Button | Analytics event logged |

### Prime Mode Card
| Element | Type | Action |
|---|---|---|
| Prime Mode image (active/inactive) | Display | Changes based on state |
| "Prime Mode" label | Button | → Prime Mode detail screen (`prime_mode_profile`) |
| PRO badge | Display | — |
| "Enhanced protection" subtitle | Display | — |
| **Prime Mode toggle switch** | Switch | Enable/disable Prime Mode |
|  ↳ Not PRO → | Auto | Shows Paywall |
|  ↳ PRO, no Uninstall Prevention → | Auto | Shows `UninstallRequirementDialog` |
|  ↳ PRO, permissions missing → | Auto | Shows `PrimeModePermissionDialog` |
|  ↳ All OK → | Auto | Enables Prime Mode |
| **Allowance Time** (when Prime Mode ON) | Display | Shows remaining unblock time |
| **"+" Add Time button** | Button | → `AddTimeDialog` |

### QUICK ACCESS Section
| Item | Icon | Action |
|---|---|---|
| Community | Groups icon | → Community Screen |
| Ranking | Trophy icon | → Ranking Screen |
| Report a Bug | Bug icon | → Community → Report Problem |
| What's New | NewReleases icon | → What's New Screen |

### APP INFO Section
| Item | Action |
|---|---|
| App Version X.X.X | Tap 7× → unlocks Developer mode |

### DEVELOPER Section (hidden, unlocked by 7 taps)
| Item | Action |
|---|---|
| Developer Settings | → Developer Options Screen |

### Dialogs launched from this screen
| Dialog | Trigger |
|---|---|
| `EditProfileDialog` | Pencil icon on profile card |
| `PrimeModePermissionDialog` | Prime toggle, permissions missing |
| `UninstallRequirementDialog` | Prime toggle, no Device Admin |
| `AddTimeDialog` | "+" on Allowance Time |
| `PushUpBetaDialog` | Push-up feature prompt |
| Paywall overlay | Prime toggle, not PRO |

---

## 7. RANKING SCREEN (`RankingScreen`)
**Route:** `ranking`  
**Access:** Account & Settings → Quick Access → Ranking

### Content
| Element | Type | Action |
|---|---|---|
| Current rank badge image | Display | — |
| Rank tier name | Display | (Unranked → Initiate → … → Legend) |
| "Days to next rank" text | Display | — |
| Progress bar (to next rank) | Display | — |
| **Leaderboard list** | Scrollable | Top users by streak days |
| Each leaderboard row | Display | Rank # / avatar / name / days |
| Back arrow (top bar) | Button | → Previous screen |

---

## 8. SUBSCRIPTION / PAYWALL FLOW (`PaywallFlowScreen`)
**Route:** `paywall`

### Step 1: FEATURES (Social Sentry PRO)
| Element | Type | Action |
|---|---|---|
| "SOCIAL SENTRY PRO" pill | Display | — |
| Feature context message | Display | Which feature triggered paywall |
| **CompareTable** (12-row) | Display | Free vs Pro comparison |
| Back arrow | Button | → Previous screen (exits paywall) |
| **"Upgrade Now"** (sticky bottom) | Button | → AUTH step (if not signed in) OR → SELECT_PLAN |

### Step 2: AUTH (if not logged in)
| Element | Type | Action |
|---|---|---|
| Google Sign-In button | Button | Sign in with Google |
| Back arrow | Button | → FEATURES step |

### Step 3: SELECT_PLAN
| Element | Type | Action |
|---|---|---|
| Plan card — 1 Month | Selectable card | Select this billing cycle |
| Plan card — 3 Month | Selectable card | Select this billing cycle |
| Plan card — 6 Month | Selectable card | Select this billing cycle |
| Original price (strikethrough) | Display | Shown when coupon applied |
| Discounted price | Display | After coupon applied |
| "MOST POPULAR" chip | Display | On recommended plan |
| **Promo Code input field** | Text input | Enter discount code |
| **Apply** button | Button | Validates coupon against Supabase |
| **Remove** button (after applied) | Button | Clears coupon |
| "✓ Discount applied!" message | Display | When coupon valid |
| Back arrow | Button | → FEATURES step |
| **"Buy Now"** (bottom CTA) | Button | → `PaymentMethodBottomSheet` |

#### `PaymentMethodBottomSheet`
| Option | Action |
|---|---|
| bKash | → PAYMENT step |
| In-App Purchase | Shows "currently unavailable" error toast |

### Step 4: PAYMENT (bKash)
| Element | Type | Action |
|---|---|---|
| bKash logo | Display | — |
| Merchant info (name + amount) | Display | — |
| Step 1 — Dial *247# | Instruction | — |
| Step 2 — Make Payment | Instruction | — |
| Step 3 — bKash number + **Copy** button | Instruction + Button | Copies number to clipboard |
| Step 4 — Amount + **Copy** button | Instruction + Button | Copies amount to clipboard |
| Step 5 — Enter PIN | Instruction | — |
| Step 6 — Enter TRX ID | Instruction | — |
| **Transaction ID text field** | Input | Type bKash TRX ID |
| **Verify** button | Button | Calls Supabase Edge Function to verify |
| Security footer | Display | "256-bit encryption" note |
| Back arrow | Button | → SELECT_PLAN step |

---

## 9. MAIN MENU SCREEN (`MainMenuScreen`)
**Route:** `main_menu`  
**Access:** Home Screen → top-right menu icon

### Content
| Element | Type | Action |
|---|---|---|
| **Fahh Mode toggle** | Switch | Enable/disable Fahh Mode (relaxed focus mode) |
| Fahh Mode description text | Display | Changes based on ON/OFF state |
| **Uninstall Prevention section** | Display | Shows Device Admin status |
| Current status (Active / Inactive) | Display | — |
| **Enable Device Admin** | Button | Opens Device Admin activation system dialog |
| **Disable Device Admin** | Button | Opens Device Admin deactivation system dialog |
| Back arrow (top bar) | Button | → Previous screen |

---

## 10. CONTRIBUTION / SOLO SCREEN (`ContributionScreen`)
**Route:** `solo`  
**Access:** Home Screen → Play button

### Content
| Element | Type | Action |
|---|---|---|
| "Today's Commit" text field | Input | Write your daily commitment/goal |
| **Post Commit** button | Button | Submits commit to Supabase (appears in Community feed) |
| Strike / Streak calendar | Display | Visual grid of clean days |
| Solo Journey XP/level display | Display | Current XP earned from streak |
| Daily suggested tasks list | Display | Focus-task suggestions |
| Back arrow (top bar) | Button | → Previous screen |

---

## 11. USAGE STATS SCREEN (`UsageStatsScreen`)
**Route:** `usage`  
**Access:** Home Screen → "View Details"

### Content
| Element | Type | Action |
|---|---|---|
| **Daily Screen Time total** | Large display | Today's total time |
| **Per-App Usage list** | Scrollable list | Each app: icon + name + today's time + weekly avg |
| **Weekly Bar Chart** | Chart | 7-day total screen time bars |
| **Most Used Apps ranking** | List | Ranked by today's time |
| Back arrow (top bar) | Button | → Previous screen |

---

## 12. WHAT'S NEW SCREEN (`WhatsNewScreen`)
**Route:** `whats_new`  
**Access:** Account & Settings → Quick Access → What's New

### Content
| Element | Type | Action |
|---|---|---|
| Version number sections | Display | Grouped by version (e.g., v2.1.0) |
| Feature / fix entries | Display | Title + description + date |
| Back arrow (top bar) | Button | → Previous screen |

---

## 13. DEVELOPER OPTIONS SCREEN
**Route:** `developer_options`  
**Access:** Account & Settings → App Version (tap 7 times) → Developer Settings

### Content
| Element | Type | Action |
|---|---|---|
| Debug flag toggles | Switches | Enable/disable internal debug features |
| Internal state viewer | Display | Shows raw AppSettings values |
| "Force Trigger Dialog" options | Buttons | Manually open specific dialogs for testing |
| "Reset Onboarding" | Button | Clears `hasCompletedOnboarding` flag |
| Back arrow | Button | → Account & Settings |

---

## 14. STUDY TIMER ACTIVITY (`StudyTimerActivity`)
**Access:** Account & Settings → Allowance Time "+" → Study option

### Content
| Element | Type | Action |
|---|---|---|
| Duration selector | Input / Slider | Set study session length |
| **Start Timer** | Button | Begins countdown |
| Timer countdown display | Display | Remaining time |
| **Pause / Resume** | Button | Pause or resume timer |
| **Cancel** | Button | Cancels session, no time earned |
| Completion screen | Display | Shows time earned for Prime Mode |
| Back / Close | Button | → Account & Settings |

---

## 15. WALKING COUNTER ACTIVITY (`WalkingCounterActivity`)
**Access:** Account & Settings → Allowance Time "+" → Walk option

### Content
| Element | Type | Action |
|---|---|---|
| Step goal display | Display | Target steps (e.g., 1000 steps) |
| Live step counter | Display | Real-time step count from sensor |
| Progress ring | Animated ring | % toward step goal |
| **Start** | Button | Begins tracking steps |
| **Stop / Done** | Button | Ends session, earns Prime Mode time |
| Time earned preview | Display | How much allowance time this session earns |
| Back arrow | Button | → Account & Settings |

---

## 16. DNS PROTECTION SETUP ACTIVITY (`DnsProtectionSetupActivity`)
**Access:** Block Screen → Website Blocker → "Set Up DNS"

### Content
| Element | Type | Action |
|---|---|---|
| Explanation text | Display | How DNS protection works |
| **Enable VPN/DNS** toggle | Switch | Activates blocking VPN profile |
| Blocked categories list | Display | Adult content / Distractions / etc. |
| **Configure** button | Button | Opens Android VPN settings |
| Back arrow | Button | → Block Screen |

### `DnsWarningOverlayActivity` (automatic)
| Element | Type | Action |
|---|---|---|
| Warning title | Display | "DNS Protection is OFF" |
| Warning message | Display | Explains risk |
| **Re-enable** button | Button | Opens DNS setup again |
| **Dismiss** | Button | Closes overlay |

---

## 17. APP LIMIT BLOCK ACTIVITY (`AppLimitBlockActivity`)
**Triggered automatically** when an app's daily limit is reached.

### Content
| Element | Type | Action |
|---|---|---|
| App name + icon | Display | Which app was blocked |
| "Daily limit reached" message | Display | — |
| Remaining limit info | Display | — |
| **Emergency Override** | Button | → `EmergencyCodeDialog` |
| **Go Back / Close** | Button | Returns to home screen |

---

## 18. DIALOGS & BOTTOM SHEETS (Global)

### `AppPickerDialog`
| Element | Action |
|---|---|
| Search field | Filter installed apps by name |
| App list (scrollable) | Each row: icon + name + current limit (if any) |
| Tap app row | Selects app, opens time limit setter |
| Confirm | Saves limit |
| Cancel / Close | Dismisses dialog |

### `EditProfileDialog`
| Element | Action |
|---|---|
| Full Name field | Edit display name |
| Username field | Edit @handle |
| Avatar URL field | Set custom profile picture URL |
| Save button | Persists changes to Supabase `profiles` |
| Cancel | Dismisses without saving |

### `PrimeModePermissionDialog`
| Element | Action |
|---|---|
| Accessibility permission row | Tap → Opens Android Accessibility settings |
| Battery optimization row | Tap → Opens Battery Optimization settings |
| "Done" | Dismisses after granting |
| "Cancel" | Dismisses without action |

### `EmergencyCodeDialog`
| Element | Action |
|---|---|
| Code input field | Enter emergency bypass code |
| "Verify" button | Validates code, unlocks if correct |
| Cancel | Dismisses |

### `AccessibilityDisclosureDialog`
| Element | Action |
|---|---|
| Disclosure text | Explains what Accessibility is used for |
| "Proceed" | Opens Accessibility settings |
| "Cancel" | Dismisses |

### `HelpBottomSheet`
| Element | Action |
|---|---|
| "Report a Problem" | → Community Report Problem section |
| "Share an Idea" | → Community Report Problem section |
| Close button | Dismisses |

### `PaymentMethodBottomSheet`
| Element | Action |
|---|---|
| bKash option | → Paywall PAYMENT step |
| In-App Purchase option | Shows "unavailable" error |
| Close | Dismisses |

### `BlockingCongratulationsOverlay`
| Element | Action |
|---|---|
| Congratulations animation | Display |
| "Keep it up!" message | Display |
| Close / "Continue" | Dismisses overlay |

### `PlayButtonTutorialOverlay`
| Element | Action |
|---|---|
| Arrow pointing to Play button | Display |
| Tutorial text | Display |
| Tap anywhere | Dismisses overlay |

### `PushUpBetaDialog`
| Element | Action |
|---|---|
| Push-up counter beta explanation | Display |
| "Try it" button | Opens push-up counter |
| "Maybe Later" | Dismisses |

### `VideoPopup`
| Element | Action |
|---|---|
| Embedded video player | Shows tutorial video |
| Close button | Dismisses |

### `UserProfileDialog` (Community)
| Element | Action |
|---|---|
| Avatar + username + rank | Display |
| Streak days | Display |
| Close button | Dismisses |

---

## 19. TODO SCREEN (`TodoScreen`)
**Route:** `todo` | **Bottom Nav:** Checklist icon

### Top Bar
| Element | Type | Action |
|---|---|---|
| "To Do" title | Display | — |
| Calendar Strip (7-day) | Selectable | Filter tasks by date |
| Profile icon | Button | → Account & Settings Screen |

### Content
| Element | Type | Action |
|---|---|---|
| **Task List** | Scrollable | List of `TaskCard` items |
| **Add Task (FAB)** | Floating Button | Opens `NewAddTaskDialog` |
| **Routine Toggle** (in Dialog) | Switch | Marks task as recurring daily |
| **Task Completion** | Checkbox | Toggles task status (persists in Room DB) |
| **Task Swipe** | Gesture | Swipe to delete or edit |
| **Routine Reset Worker** | Background | Auto-copies routines at 00:01 daily |

---

## 20. HAKARI AI CHAT SCREEN (`HakariAiNotificationPage`)
**Route:** Not a direct route (launched from Widget or Notification)

### Main Chat Interface
| Element | Type | Action |
|---|---|---|
| **Conversation History Drawer** | Slide-out Drawer | List of past conversations |
| **New Chat** button | Button | Starts a fresh session (clears UI, keeps DB) |
| **Message List** | Scrollable | Hakari's character-based responses |
| **Input Field** | Text Input | Ask Hakari anything |
| **Markdown Support** | Display | Renders bold, lists, and code blocks |

#### History Drawer Options
| Element | Type | Action |
|---|---|---|
| Conversation Item | Clickable | Loads selected history from Room DB |
| **Rename** (pencil) | Button | Edit conversation title |
| **Delete** (trash) | Button | Removes conversation from Room DB |
| **Clear All** | Button | Wipes all Hakari history |

---

## 21. PROGRESSIVE REELS LOCKOUT OVERLAY
**Triggered:** On 3rd consecutive Reels block attempt.

| Element | Type | Action |
|---|---|---|
| **Countdown Timer** | 20s / 30s | Mandatory wait period |
| **"You are locked out"** text | Display | Motivational/Strict message |
| **Home Button** | Button | Exits to Home Screen |
| **Force Close App** | Logic | Tier 3+ kills the target app process |

