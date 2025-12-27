$env:CONVEX_DEPLOY_KEY="prod:original-boar-519|eyJ2MiI6IjhjNTQzNzY3YmQyYzRmMTNhZWE2ZWI2MzZmMzIzNWQ1In0="

Write-Host "Setting up Convex backend environment variables..."

Write-Host "Setting JWKS..."
npx convex env set "JWKS" '{"keys":[{"kty":"RSA","n":"z_dXPpT4KntrQ7C-u6hms9i1YerpoAQeXykkeS_t1l8NeunhDNxjubPk8ILVisDQ3zp11MO-p6splQ-A04fOg_m-9FmKLp47BEtsaoA7Yeb6sJGbSWSka1mVZ2H1USTWJvSLLxjczIqugPX5wagAdRHS4Lpaenzdgi_Ix7bI0kFW1jMicKVrWNJH-UfjyQli91jhyz9HKwtBbvAcK5sW6pEBDv0hUTx84YNRH2SDF15Ni4TwfseK3X2NnPzSf6pt85FZLBOQk4Jur0ZLbtJ8NYFgQhxuli_S0J-54Dm6Dc-fKU2k723N5QqreHW8krR894uFPanr29H7Y7FUbb-gBw","e":"AQAB","use":"sig"}]}'

# Warning: JWT_PRIVATE_KEY is truncated in the source. Skipping to avoid breaking config with invalid key.
# Write-Host "Setting JWT_PRIVATE_KEY..."
# npx convex env set "JWT_PRIVATE_KEY" "-----BEGIN PRIVATE KEY-----"

Write-Host "Setting SITE_URL..."
npx convex env set "SITE_URL" "https://runtime-monitoring.vly.ai"

Write-Host "Setting VLY_APP_NAME..."
npx convex env set "VLY_APP_NAME" "Aspid portfolio"

Write-Host "Setting VLY_INTEGRATION_BASE_URL..."
npx convex env set "VLY_INTEGRATION_BASE_URL" "https://integrations.vly.ai/"

Write-Host "Setting VLY_INTEGRATION_KEY..."
npx convex env set "VLY_INTEGRATION_KEY" "sk_ad44b124253d324140d3011b55ad9adafde33b47ba35afd82daf184f81219070"

Write-Host "✅ Backend environment variables set (Conceptually). JWT_PRIVATE_KEY was skipped."
