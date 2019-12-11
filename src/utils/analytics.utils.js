import {
  GoogleAnalyticsSettings,
  GoogleAnalyticsTracker
} from "react-native-google-analytics-bridge";
/**
setDryRun when enabled the native library prevents any data from being sent to Google Analytics.This allows you to test or debug the implementation, without your test data appearing in your Google Analytics reports.
*/
GoogleAnalyticsSettings.setDryRun(false);
/**
setDispatchInterval allows you to configure how often (in seconds) the batches are sent to your tracker.
*/
GoogleAnalyticsSettings.setDispatchInterval(
  parseInt(Config.GA_TRACKER_INTERVAL)
);
/**
Initialise the tracker based on the environment based tracker ID
*/
export const tracker = new GoogleAnalyticsTracker(Config.GA_TRACKER_ID, {
  CD_A: 1,
  CD_B: 2
});
