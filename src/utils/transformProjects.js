import { getSkillIcon } from './skillIconMap'

/**
 * Transforms raw Supabase project data into the format your components expect
 * 
 * @param {Array} supabaseProjects - Raw data from Supabase
 * @returns {Array} Transformed projects ready for display
 */
export function transformProjects(supabaseProjects) {
  if (!supabaseProjects || supabaseProjects.length === 0) {
    return []
  }

  return supabaseProjects.map(project => ({
    // Basic info (direct mapping)
    id: String(project.id),  // Convert number to string
    title: project.title || 'Untitled',
    category: project.category || 'Projects',
    description: project.description || '',
    
    // Transform image_urls array to media array (with null check)
    media: transformMedia(project.image_urls),
    
    // Transform skills: add icon component from our map (with null check)
    skills: transformSkills(project.skills),
    
    // Rename snake_case to camelCase
    liveLink: project.live_url || null,
    github: project.github_url || null,
    
    // Optional fields
    order_index: project.order_index || 0,
    created_at: project.created_at
  }))
}

/**
 * Converts image_urls array to media array
 * Handles null, undefined, or non-array values safely
 * 
 * Input:  ["https://image1.jpg", "https://image2.jpg"]
 * Output: [{type: "image", url: "https://image1.jpg"}, ...]
 * 
 * Input:  null or undefined
 * Output: [{type: "image", url: "/assets/placeholder.png"}]
 */
function transformMedia(imageUrls) {
  // Check if imageUrls exists AND is an array
  if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
    // Return placeholder if no images
    return [{ type: 'image', url: '/assets/placeholder.png' }]
  }
  
  return imageUrls.map(url => ({
    type: 'image',
    url: url
  }))
}

/**
 * Adds icon components to skills
 * Handles null, undefined, or non-array values safely
 * 
 * Input:  [{label: "React", color: "#61DAFB"}]
 * Output: [{label: "React", color: "#61DAFB", icon: FaReact}]
 */
function transformSkills(skills) {
  // Check if skills exists AND is an array
  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return []
  }
  
  return skills.map(skill => ({
    label: skill.label || 'Unknown',
    color: skill.color || '#888888',
    icon: getSkillIcon(skill.label)  // Add the icon component
  }))
}