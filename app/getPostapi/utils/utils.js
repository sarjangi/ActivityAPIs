const accessibilityMapping = {
    High: 0.25,
    Medium: 0.5,
    Low: 0.75,
  };
  
  const priceMapping = {
    Free: 0,
    Low: 0.25,
    High: 0.75,
  };
  
export function mapAccessibility(accessibility) {
    let accessibilityLevel;
    if (accessibility <= 0.25) {
      accessibilityLevel = "High";
    } else if (accessibility > 0.25 && accessibility <= 0.75) {
      accessibilityLevel = "Medium";
    } else if (accessibility > 0.75) {
      accessibilityLevel = "Low";
    }
    return accessibilityLevel;
}
  
export function mapPrice(price) {
    let priceLevel;
    if (price == 0.0 || price == 0) {
      priceLevel = "Free";
    } else if (price <= 0.5) {
      priceLevel = "Low";
    } else if (price > 0.5) {
      priceLevel = "High";
    }
    return priceLevel;
}
  
export function mapAccessibilityR(level) {
    return typeof level === "string"
    ? accessibilityMapping[level]
    : Object.keys(accessibilityMapping).find(
        (key) => accessibilityMapping[key] === level
        );
}
  
export function mapPriceR(level) {
    return typeof level === "string"
    ? priceMapping[level]
    : Object.keys(priceMapping).find((key) => priceMapping[key] === level);
}
export function whereCondition(_key, _value) {
  if (_key && _value) {
  return ` WHERE ${_key} = '${_value}' `;
  }
  }