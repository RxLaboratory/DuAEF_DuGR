// The API which extends DuAEF & DuESF

#include "config/api_version.jsx"

/**
 * Predefined and automatic groups
 * @enum {string}
 */
DuGR.Group = {
    /**
     * All layers in the composition
     */
    ALL: 'DuGR.all',
    /**
     * Selected layers
     */
    SELECTED: 'DuGR.selected',
    /**
     * Layers included in a custom group
     */
    GROUPED: 'DuGR.grouped',
    /**
     * Precompositions
     */
    COMP: 'DuGR.type.comp',
    /**
     * Null objects
     */
    NULL: 'DuGR.type.null',
    /**
     * Solids
     */
    SOLID: 'DuGR.type.solid',
    /**
     * Shape layers
     */
    SHAPE: 'DuGR.type.shape',
    /**
     * Text layers
     */
    TEXT: 'DuGR.type.text',
    /**
     * Adjustement layers
     */
    ADJUSTMENT: 'DuGR.type.adjustment',
    /**
     * 3D Light layers
     */
    LIGHT: 'DuGR.type.light',
    /**
     * Camera layers
     */
    CAMERA: 'DuGR.type.camera',
    /**
     * 3D Model layers
     */
    THREED_MODEL: 'DuGR.type.threeDModel',
    /**
     * Visible layers
     */
    VISIBLE: 'DuGR.attr.visible',
    /**
     * Audio layers
     */
    SOUND: 'DuGR.attr.sound',
    /**
     * Solo layers
     */
    SOLO: 'DuGR.attr.solo',
    /**
     * Locked layers
     */
    LOCKED: 'DuGR.attr.locked',
    /**
     * Shy layers
     */
    SHY: 'DuGR.attr.shy',
    /**
     * Effects enabled
     */
    EFFECTS: 'DuGR.attr.effects',
    /**
     * Motion Blur enabled
     */
    MB: 'DuGR.attr.mb',
    /**
     * 3D layers
     */
    THREE_D: 'DuGR.attr.three_d',
    /**
     * Guide layers
     */
    GUIDE: 'DuGR.attr.guide',
    /**
     * The layer does not have any parent
     */
    ORPHAN: 'DuGR.hierarchy.orphan',
    /**
     * The layer has at least one child
     */
    HAS_CHILD: 'DuGR.hierarchy.hasChildren',
    /**
     * This is a special group: all layers in there will always be ignored by all methods.
     */
    IGNORED: '::Ignored::',
    /**
     * Layer styles are enabled.
     */
    LAYER_STYLES: 'DuGR.layerStyles',
    /**
     * Layer style: Drop shadow is enabled.
     */
    STYLE_DROP_SHADOW: 'DuGR.style.dropShadow',
    /**
     * Layer style: Inner shadow is enabled.
     */
    STYLE_INNER_SHADOW: 'DuGR.style.innerShadow',
    /**
     * Layer style: Outer glow is enabled..
     */
    STYLE_OUTER_GLOW: 'DuGR.style.outerGlow',
    /**
     * Layer style: Inner glow is enabled.
     */
    STYLE_INNER_GLOW: 'DuGR.style.innerGlow',
    /**
     * Layer style: Bevel is enabled.
     */
    STYLE_BEVEL: 'DuGR.style.bevel',
    /**
     * Layer style: Satin is enabled.
     */
    STYLE_SATIN: 'DuGR.style.satin',
    /**
     * Layer style: Color overlay is enabled.
     */
    STYLE_COLOR: 'DuGR.style.color',
    /**
     * Layer style: Gradient Overlay is enabled.
     */
    STYLE_GRADIENT: 'DuGR.style.gradient',
    /**
     * Layer style: Stroke is enabled.
     */
    STYLE_STROKE: 'DuGR.style.stroke',
    /**
     * Animation: at current time.
     */
    AT_TIME: 'DuGR.animation.atTime',
    /**
     * Animation: in the current time range.
     */
    IN_TIME_RANGE: 'DuGR.animation.inTimeRange',
    /**
     * Animation: has keyframes.
     */
    HAS_KEYFRAMES: 'DuGR.animation.hasKeyframes',
    /**
     * Animation: has expressions.
     */
    HAS_EXPRESSIONS: 'DuGR.animation.hasExpressions',
    /**
     * Matte: has at least one mask.
     */
    HAS_MASK: 'DuGR.matte.hasMask',
    /**
     * Matte: has track matte.
     */
    HAS_MATTE: 'DuGR.matte.hasMatte',
    /**
     * Matte: is used as a track matte.
     */
    IS_MATTE: 'DuGR.matte.isMatte',
    /**
     * Matte: Preserve transparency is enabled.
     */
    PRESERVE_TRANSPARENCY: 'DuGR.matte.preserveTransparency',
    /**
     * Matte: The blending mode is normal.
     */
    NORMAL_BLENDING: 'DuGR.matte.normalBlending',
    /**
     * Matte: The blending mode is not normal.
     */
    OTHER_BLENDING: 'DuGR.matte.otherBlending',
    /**
     * Attribute: has effects.
     */
    OTHER_BLENDING: 'DuGR.attr.hasEffects',
}

/**
 * The way the warning frame can be displayed
 * @enum {Number}
 * @readonly
 * @ts-ignore */
DuGR.WarningFrameMode = {
    /**
     * No frame at all
     */
    NONE: 0,
    /**
     * Above all layers
     */
    ABOVE: 1,
    /**
     * Below all layers
     */
    BELOW: 2
}

/**
 * The way layers are isolated
 * @enum {Number}
 * @readonly
 * @ts-ignore */
DuGR.IsolationMode = {
    /**
     * No isolation
     */
    NONE: 0,
    /**
     * Both the timeline and the comp panel
     */
    BOTH: 1,
    /**
     * Only in the timeline
     */
    TIMELINE: 2,
    /**
     * Only in the comp panel
     */
    COMP_PANEL: 3
}

/**
 * How to isolate layers in the comp panel
 * @enum {Number}
 * @readonly
 * @ts-ignore */
DuGR.CompIsolationMode = {
    HIDE: 0,
    WIREFRAME: 1
}

/**
 * The name of the warning frame layer
 * @default "DuGR::Isolation"
 * @type {string}
 * @memberof DuScriptUI.String
 */
DuGR.DUGR_FRAME_NAME = "DuGR::Isolation";

/**
 * The key for DuGR isolation mode
 * @default 'dugrIsolationModed'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_ISOLATION_MODE = 'dugrIsolationMode';
/**
 * Is the layer isolated or not
 * @default 'dugrIsolated'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_HIDDEN = 'dugrIsolated';
/**
 * If the layer was shy before isolation
 * @default 'dugrWasShy'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_WAS_SHY = 'dugrWasShy';
/**
 * If the layer was enabled before isolation
 * @default 'dugrWasShy'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_WAS_ENABLED = 'dugrWasEnabled'
/**
 * If the layer was locked before isolation
 * @default 'dugrWasLocked'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_WAS_LOCKED = 'dugrWasLocked'
/**
 * The layer quality before isolation. The value may be one of 'best', 'draft', 'wireframe'.
 * @default 'dugrPreviousQuality'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_PREVIOUS_QUALITY = 'dugrPreviousQuality'
/**
 * If the layer had a tag before isolation.
 * @default 'dugrHadTag'
 * @readonly
 * @memberof DuAETag.Key
 */
DuAETag.Key.DUGR_HAD_TAG = 'dugrHadTag'

/**
 * Checks if a layer is included in the given groups
 * @param {Layer} layer The layer to test
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {MarkerValue} [tag] If you have the tag as returned by {@link DuAETag.get} or {@link DuAETag.set}, providing it here improves performance.
 * @param {Boolean} [and=false] If false, the layer must be contained in at least one of the groups, otherwise in all the groups.
 * @returns {Boolean} true if the layer belongs to at least one of the given groups
 */
DuGR.inGroups = function ( layer, groups, tag, and )
{
    and = def(and, false);

    // The Dugr layer is not in any group
    if (layer.name == i18n._(DuGR.DUGR_FRAME_NAME)) return false;

    var ok = false;
    for( var i = 0, n = groups.length; i < n; i++)
    {
        ok = false;

        var layerStyles = layer.property("ADBE Layer Styles");
        var comp = layer.containingComp;
        var workAreaEnd = comp.workAreaStart + comp.workAreaDuration;

        var group = groups[i];

        if (group == DuGR.Group.ALL) ok = true;
        else if (group == DuGR.Group.SELECTED ) ok = layer.selected;
        else if (group == DuGR.Group.GROUPED ) ok = DuAETag.getGroups( layer ).length > 0;
        else if (group == DuGR.Group.COMP ) ok = DuAELayer.isComp( layer );
        else if (group == DuGR.Group.NULL ) ok = DuAELayer.isNull( layer );
        else if (group == DuGR.Group.SOLID ) ok = DuAELayer.isSolid( layer );
        else if (group == DuGR.Group.SHAPE ) ok = layer instanceof ShapeLayer;
        else if (group == DuGR.Group.TEXT ) ok = layer instanceof TextLayer;
        else if (group == DuGR.Group.ADJUSTMENT ) ok = DuAELayer.isAdjustment( layer );
        else if (group == DuGR.Group.LIGHT ) ok =  layer instanceof LightLayer;
        else if (group == DuGR.Group.CAMERA ) ok = layer instanceof CameraLayer;
        else if (group == DuGR.Group.THREED_MODEL ) ok = layer instanceof ThreeDModelLayer;
        else if (group == DuGR.Group.VISIBLE ) ok = layer.enabled;
        else if (group == DuGR.Group.SOUND ) ok = layer.hasAudio;
        else if (group == DuGR.Group.SOLO ) ok = layer.solo;
        else if (group == DuGR.Group.LOCKED ) ok = layer.locked;
        else if (group == DuGR.Group.SHY ) ok = layer.shy;
        else if (group == DuGR.Group.EFFECTS) ok = layer.effectsActive && layer.property("ADBE Effect Parade").numProperties > 0; 
        else if (group == DuGR.Group.MB ) ok = layer.motionBlur;
        else if (group == DuGR.Group.THREE_D ) ok = DuAELayer.isThreeD( layer );
        else if (group == DuGR.Group.GUIDE ) ok = layer.guideLayer;
        else if (group == DuGR.Group.ORPHAN ) ok = !layer.parent;
        else if (group == DuGR.Group.HAS_CHILD ) ok = DuAELayer.hasChild(layer);

        else if (group == DuGR.Group.LAYER_STYLES ) ok = layerStyles.enabled;
        else if (group == DuGR.Group.STYLE_DROP_SHADOW) ok = layerStyles.property("dropShadow/enabled").enabled;
        else if (group == DuGR.Group.STYLE_INNER_SHADOW ) ok = layerStyles.property("innerShadow/enabled").enabled;
        else if (group == DuGR.Group.STYLE_OUTER_GLOW ) ok = layerStyles.property("outerGlow/enabled").enabled;
        else if (group == DuGR.Group.STYLE_INNER_GLOW ) ok = layerStyles.property("innerGlow/enabled").enabled;
        else if (group == DuGR.Group.STYLE_BEVEL ) ok = layerStyles.property("bevelEmboss/enabled").enabled;
        else if (group == DuGR.Group.STYLE_SATIN ) ok = layerStyles.property("chromeFX/enabled").enabled;
        else if (group == DuGR.Group.STYLE_COLOR ) ok = layerStyles.property("solidFill/enabled").enabled;
        else if (group == DuGR.Group.STYLE_GRADIENT ) ok = layerStyles.property("gradientFill/enabled").enabled;
        else if (group == DuGR.Group.STYLE_STROKE ) ok = layerStyles.property("frameFX/enabled").enabled;

        else if (group == DuGR.Group.AT_TIME ) ok = layer.inPoint <= comp.time && layer.outPoint >= comp.time;       
        else if (group == DuGR.Group.IN_TIME_RANGE ) ok = layer.inPoint < workAreaEnd && layer.outPoint > comp.workAreaStart;
        else if (group == DuGR.Group.HAS_KEYFRAMES ) ok = DuAELayer.hasKeys(layer);
        else if (group == DuGR.Group.HAS_EXPRESSIONS ) ok = DuAELayer.hasExpressions(layer);
        
        else if (group == DuGR.Group.HAS_MASK ) ok = DuAELayer.hasMask(layer);
        else if (group == DuGR.Group.HAS_MATTE ) ok = layer.hasTrackMatte;
        else if (group == DuGR.Group.IS_MATTE ) ok = layer.isTrackMatte;
        else if (group == DuGR.Group.PRESERVE_TRANSPARENCY ) ok = layer.preserveTransparency;
        else if (group == DuGR.Group.NORMAL_BLENDING ) ok = layer.blendingMode == BlendingMode.NORMAL;
        else if (group == DuGR.Group.OTHER_BLENDING ) ok = layer.blendingMode != BlendingMode.NORMAL;

        else
        {
            // Get the custom groups
            var layerGroups = DuAETag.getGroups( layer );
            if (layerGroups.length == 0) ok = false;
            layerGroups = new DuList( layerGroups );
            if (layerGroups.indexOf(group) >= 0) ok = true;
        }
        
        if (ok && !and) return true;
        if (!ok && and) return false;
    }

    return ok;
}

/**
 * Runs a function for each layer in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {DuGR~doCallBack} callback The function to run on each layer.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {DuGR~doNotCallBack} [notCallback] The function to run on each layer IF it is NOT in the groups.
 * @param {Boolean} [and=false] If false, runs the function on the layers contained in at least one of the groups, otherwise in all the groups.
 */
DuGR.do = function( groups, callback, invert, comp, notCallback, and )
{
    notCallback = def(notCallback, function(){} );
    comp = def(comp, DuAEProject.getActiveComp());
    invert = def(invert, false);

    if (!comp) return;
    if (comp.layers.length == 0) return;

    var returnValue;

    new DuList(comp.layers).do( function( layer ){
        if (DuGR.inGroups(layer, [DuGR.Group.IGNORED], undefined, and)) return;
        var ok = DuGR.inGroups(layer, groups, undefined, and);
        if (invert) ok = !ok;
        if (ok) returnValue = callback( layer, returnValue );
        else notCallback( layer );
    } );
}

/**
 * A function passed to {@link Dugr.do}.
 * @callback doCallBack
 * @memberof DuGR
 * @param {Layer} layer The layer on which the function operates.
 * @param {any} returnValue The return value of the previous iteration. Undefined during the first iteration.
 * @return {any} What the function returns will be automatically passed as a second argument on the next iteration.<br />
 * This is useful if the function has to set a toogle on the first layer, and then re-use it, for example.
 */

/**
 * Toggles the visibility of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.toggleVisibility = function ( groups, invert, comp )
{
    function f( layer, enabled)
    {
        if (layer.isTrackMatte) return;
        enabled = def( enabled, !layer.enabled );
        layer.enabled = enabled;
        return enabled;
    }

    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the audio of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.toggleSound = function( groups, invert, comp )
{
    function f( layer, enabled)
    {
        enabled = def( enabled, !layer.audioEnabled );
        layer.audioEnabled = enabled;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the solo mode of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.toggleSolo = function( groups, invert, comp )
{
    function f( layer, enabled)
    {
        if (!layer.enabled) return enabled;
        enabled = def( enabled, !layer.solo );
        layer.solo = enabled;
        return enabled;
    }
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the lock of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.toggleLocked = function( groups, invert, comp )
{
    function f( layer, enabled)
    {
        enabled = def( enabled, !layer.locked );
        layer.locked = enabled;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the shy mode of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.toggleShy = function( groups, invert, comp )
{
    function f( layer, enabled)
    {
        enabled = def( enabled, !layer.shy );
        layer.shy = enabled;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the collapse transformation/continuous rasterization mode of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleCollapseTransformation = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;
        if (!layer.canSetCollapseTransformation) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.collapseTransformation );
        layer.collapseTransformation = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the guide mode of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleGuide = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.guideLayer );
        layer.guideLayer = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Changes the render quality of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleQuality = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, quality)
    {
        if (layer.locked && !allowLockedChanges) return quality;

        var locked = layer.locked;
        layer.locked = false;

        if (typeof quality === 'undefined')
        {
            quality = layer.quality;
			if (quality == LayerQuality.BEST) quality = LayerQuality.DRAFT;
			else if (quality == LayerQuality.DRAFT) quality = LayerQuality.WIREFRAME;
			else if (quality == LayerQuality.WIREFRAME) quality = LayerQuality.BEST;
        }
        layer.quality = quality;

        layer.locked = locked;
        return quality;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the the effects of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleEffects = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.effectsActive );
        layer.effectsActive = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the effects of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleFrameBlending = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, frameBlending)
    {
        if (layer.locked && !allowLockedChanges) return frameBlending;
        if (!(layer instanceof AVLayer)) return frameBlending;
        if (!layer.source.hasVideo) return;


        var locked = layer.locked;
        layer.locked = false;

        if (typeof frameBlending === 'undefined')
        {
            frameBlending = layer.frameBlendingType;
            if (frameBlending == FrameBlendingType.PIXEL_MOTION) frameBlending = FrameBlendingType.FRAME_MIX;
            else if (frameBlending == FrameBlendingType.FRAME_MIX) frameBlending = FrameBlendingType.NO_FRAME_BLEND;
            else if (frameBlending == FrameBlendingType.NO_FRAME_BLEND) frameBlending = FrameBlendingType.PIXEL_MOTION;
        }

        layer.frameBlendingType = frameBlending;

        layer.locked = locked;
        return frameBlending;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the motion blur of all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleMotionBlur = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.motionBlur );
        layer.motionBlur = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the adjustment layer mode for all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleAdjustment = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.adjustmentLayer );
        layer.adjustmentLayer = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Toggles the 3D mode for all layers in the groups.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [allowLockedChanges=true] If set to false, locked layers won't be changed.
 */
DuGR.toggleThreeD = function( groups, invert, comp, allowLockedChanges )
{
    function f( layer, enabled)
    {
        if (layer.locked && !allowLockedChanges) return enabled;

        var locked = layer.locked;
        layer.locked = false;

        enabled = def( enabled, !layer.threeDLayer );
        layer.threeDLayer = enabled;

        layer.locked = locked;
        return enabled;
    }
    
    DuGR.do( groups, f, invert, comp);
}

/**
 * Selects the layers.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [and=false] If false, selects the layers contained in at least one of the groups, otherwise in all the groups.
 */
DuGR.select = function( groups, invert, comp, and )
{
    function f( layer )
    {
        if (layer.locked) return;
        layer.selected = true;
    }

    function nf( layer )
    {
        if (layer.locked) return;
        layer.selected = false;
    }
    
    DuGR.do( groups, f, invert, comp, nf, and);
}

// Low level undocumented method. Creates the warning frame.
DuGR.createDugrLayer = function( comp, frameMode, isolationMode )
{
    comp = def( comp, DuAEProject.getActiveComp() );
    if (!comp) return;

    //add rect
    sq = comp.layers.addShape();
    sq.shy = true;
    sq.guideLayer = true;
    sq.name = i18n._(DuGR.DUGR_FRAME_NAME);

    var tag = DuAETag.set( sq, i18n._(DuGR.DUGR_FRAME_NAME), undefined );
    DuAETag.setValue(sq, DuAETag.Key.DUGR_ISOLATION_MODE, isolationMode, tag);

    if (frameMode != DuGR.WarningFrameMode.ABOVE) sq.moveToEnd();

    if (frameMode == DuGR.WarningFrameMode.NONE)
    {
        sq.locked = true;
        return sq;
    }

    var gr = sq("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var groupContent = gr.property("ADBE Vectors Group");
    var shapeProp = groupContent.addProperty("ADBE Vector Shape - Rect");
    shapeProp("ADBE Vector Rect Size").setValue([comp.width,comp.height]);
    var stroke = groupContent.addProperty("ADBE Vector Graphic - Stroke");
    stroke("ADBE Vector Stroke Color").setValue([0.8,0,0]);
    stroke("ADBE Vector Stroke Opacity").setValue(50);
    stroke("ADBE Vector Stroke Width").setValue(comp.width/100);

    sq.locked = true;

    return sq;
}

// Low level undocumented method. Removes the warning frame.
DuGR.removeDugrLayer = function( comp )
{
    var layer = DuGR.getDugrLayer( comp );
    if (!layer) return;
    layer.locked = false;
    layer.remove();
}

// Low level undocumented method. Gets the warning frame.
DuGR.getDugrLayer = function( comp )
{
    comp = def( comp, DuAEProject.getActiveComp() );
    if (!comp) return;
    if (comp.numLayers == 0) return;

    //To be faster, check first and last layer first
    if (comp.layer(1).name == i18n._(DuGR.DUGR_FRAME_NAME)) return comp.layer(1);

    if (comp.layer(comp.numLayers).name == i18n._(DuGR.DUGR_FRAME_NAME))  return comp.layer(comp.numLayers);

    for (var i = 1, n = comp.numLayers; i <= n; i++)
    {
        if (comp.layer(i).name == i18n._(DuGR.DUGR_FRAME_NAME)) return comp.layer(i);
    }

    return null;
}

/**
 * Checks the isolation mode of the comp.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to check.
 * @return {DuGR.IsolationMode} The isolation mode.
 */
DuGR.isolationMode = function( comp )
{
    comp = def(comp, DuAEProject.getActiveComp() );
    if (!comp) return DuGR.IsolationMode.NONE;
    if (comp.numLayers == 0) return DuGR.IsolationMode.NONE;

    var dugrLayer = DuGR.getDugrLayer( comp );
    if (!dugrLayer) return DuGR.IsolationMode.NONE;

    var mode = DuAETag.getValue( dugrLayer, DuAETag.Key.DUGR_ISOLATION_MODE, DuAETag.Type.INT ) ;
    if (mode == null) mode = DuGR.IsolationMode.NONE;
    return mode;
}

/**
 * Activates the isolation mode.
 * @param {string[]} groups The list of group names. It can include custom groups, or predefined names taken from {@link DuGR.Group}.
 * @param {Boolean} [invert=false] When true, the list of groups is a blacklist and the layer must not be contained in any one of them.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to isolate.
 * @param {DuGR.WarningFrameMode} [frameMode=DuGR.WarningFrameMode.BELOW] How the warning frame must be shown
 * @param {DuGR.IsolationMode} [isolationMode=DuGR.IsolationMode.BOTH] What needs to be hidden.
 * @param {DuGR.CompIsolationMode} [compIsolationMode=DuGR.CompIsolationMode.HIDE] How to hide the layers
 * @param {Boolean} [lockHiddenLayers=true] whether to lock the layers being hidden.
 */
DuGR.isolate = function( groups, invert, comp, frameMode, isolationMode, compIsolationMode, lockHiddenLayers )
{
    comp = def(comp, DuAEProject.getActiveComp());
    if (!comp) return;
    if (comp.numLayers == 0) return;

    frameMode = def(frameMode, DuGR.WarningFrameMode.BELOW);
    isolationMode = def(isolationMode, DuGR.IsolationMode.BOTH);
    compIsolationMode = def(compIsolationMode, DuGR.CompIsolationMode.HIDE);
    lockHiddenLayers = def(lockHiddenLayers, true);
    invert = def(invert, false);

    if (isolationMode == DuGR.IsolationMode.NONE) DuGR.exitIsolation( comp, compositions );

    var timeline = isolationMode == DuGR.IsolationMode.BOTH || isolationMode == DuGR.IsolationMode.TIMELINE;
    var compPanel = isolationMode == DuGR.IsolationMode.BOTH || isolationMode == DuGR.IsolationMode.COMP_PANEL;

    // The previous mode
    var previousMode = DuGR.isolationMode( comp );

    // AE deselects the layers on creation of the new shape... Store the list
    var selectedLayers = DuAEComp.unselectLayers( comp );

    // Create the frame
    var dugrFrameLayer;
    if (previousMode == DuGR.IsolationMode.NONE) dugrFrameLayer = DuGR.createDugrLayer( comp, frameMode, isolationMode );
    else
    {
        dugrFrameLayer = DuGR.getDugrLayer(comp);
        DuAETag.setValue(dugrFrameLayer, DuAETag.Key.DUGR_ISOLATION_MODE, isolationMode);
    }

    // Restore the selection
    DuAEComp.selectLayers(selectedLayers);

    // Keep the shy status of the comp
    if (previousMode == DuGR.IsolationMode.NONE || previousMode == DuGR.IsolationMode.COMP_PANEL)
    {
        DuAETag.setValue( dugrFrameLayer, DuAETag.Key.DUGR_COMP_SHY, comp.hideShyLayers);
    }

    // Activate shy mode
    if (timeline) comp.hideShyLayers = true;

    // Loop layers to hide/shy them or restore their previous state.
    for (var i = 1, n = comp.numLayers; i <= n; i++)
    {
        var layer = comp.layer(i);

        // Get/Set the dugr tag
        var tag = DuAETag.set( layer, undefined, undefined );

        // whether to isolate the layer
        var hide = !DuGR.inGroups( layer, groups, tag );
        if (invert) hide = !hide;

        // whether the layer was already isolated
        var wasHidden = DuAETag.getValue( layer, DuAETag.Key.DUGR_HIDDEN, DuAETag.Type.BOOL, tag );

        // Nothing to do
        if (!wasHidden && !hide) continue;

        if (!wasHidden)
        {
            DuGR.saveStatus( layer, tag );
        }
        
        if (hide)
        {
            DuGR.hideLayer( layer, timeline, compPanel, compIsolationMode, lockHiddenLayers, tag );
        }
        else 
        {
            DuGR.unHideLayer( layer, tag );
        }
    }
}

// low-level undocumented method to save the status of a layer before hiding it.
DuGR.saveStatus = function( layer, tag )
{
    var tagParams = tag.getParameters();

    tagParams[DuAETag.Key.DUGR_HIDDEN] = true;
    tagParams[DuAETag.Key.DUGR_WAS_SHY] = layer.shy;
    tagParams[DuAETag.Key.DUGR_WAS_ENABLED] = layer.enabled;
    tagParams[DuAETag.Key.DUGR_WAS_LOCKED] = layer.locked;
    //params[DuAETag.Key.DUGR_HAD_TAG] = hadTag;

    var quality = 'best';
    if (layer.quality == LayerQuality.DRAFT) quality = 'draft';
    else if (layer.quality == LayerQuality.WIREFRAME) quality = 'wireframe';
    tagParams[DuAETag.Key.DUGR_PREVIOUS_QUALITY] = quality;

    tag.setParameters( tagParams );

    DuAETag.set( layer, undefined, tag );
}

// low-level undocumented method to put a layer to isolation
DuGR.hideLayer = function( layer, timeline, compPanel, compIsolationMode, lockHiddenLayers, tag )
{
    // Ignore the Dugr Layer
    if (layer.name == i18n._(DuGR.DUGR_FRAME_NAME)) return;

    if (DuGR.inGroups(layer, [DuGR.Group.IGNORED])) return;
    // Hide
    if (timeline) layer.shy = true;
    else // Restore shy status
    {
        var wasShy = DuAETag.getValue( layer, DuAETag.Key.DUGR_WAS_SHY, DuAETag.Type.BOOL, tag );
        if (wasShy) layer.shy = true;
        else if (wasShy != null) layer.shy = false;
    }
    if (compPanel)
    {
        if (compIsolationMode == DuGR.CompIsolationMode.WIREFRAME) layer.quality = LayerQuality.WIREFRAME;
        else layer.enabled = false;
    }
    else  // Restore visibility status
    {
        var wasEnabled = DuAETag.getValue( layer, DuAETag.Key.DUGR_WAS_ENABLED, DuAETag.Type.BOOL, tag );
        if (wasEnabled) layer.enabled = true;
        else if (wasEnabled != null)  layer.enabled = false;

        var quality = DuAETag.getValue( layer, DuAETag.Key.DUGR_PREVIOUS_QUALITY, DuAETag.Type.STRING, tag );
        if (quality == 'best') layer.quality = LayerQuality.BEST;
        else if (quality == 'draft') layer.quality = LayerQuality.DRAFT;
        else if (quality == 'wireframe') layer.quality = LayerQuality.WIREFRAME;
    }
    if (lockHiddenLayers) layer.locked = true;

    DuAETag.setValue( layer, DuAETag.Key.DUGR_HIDDEN, true, tag );
}

// low-level undocumented method to remove a layer from isolation
DuGR.unHideLayer = function ( layer, tag )
{
    if (DuGR.inGroups(layer, [DuGR.Group.IGNORED])) return;

    var wasShy = DuAETag.getValue( layer, DuAETag.Key.DUGR_WAS_SHY, DuAETag.Type.BOOL, tag );
    if (wasShy) layer.shy = true;
    else if (wasShy != null) layer.shy = false;

    var wasEnabled = DuAETag.getValue( layer, DuAETag.Key.DUGR_WAS_ENABLED, DuAETag.Type.BOOL, tag );
    if (wasEnabled) layer.enabled = true;
    else if (wasEnabled != null)  layer.enabled = false;

    var wasLocked = DuAETag.getValue( layer, DuAETag.Key.DUGR_WAS_LOCKED, DuAETag.Type.BOOL, tag );
    if (wasLocked) layer.locked = true;
    else if (wasLocked != null) layer.locked = false;

    var quality = DuAETag.getValue( layer, DuAETag.Key.DUGR_PREVIOUS_QUALITY, DuAETag.Type.STRING, tag );
    if (quality == 'best') layer.quality = LayerQuality.BEST;
    else if (quality == 'draft') layer.quality = LayerQuality.DRAFT;
    else if (quality == 'wireframe') layer.quality = LayerQuality.WIREFRAME;

    DuAETag.setValue( layer, DuAETag.Key.DUGR_HIDDEN, false, tag );

    /*var hadTag = DuAETag.getValue( layer, DuAETag.Key.DUGR_HAD_TAG, DuAETag.Type.BOOL, tag );
    if (hadTag) DuAETag.setValue( layer, DuAETag.Key.DUGR_HIDDEN, false );
    else DuAETag.remove( layer );*/
}

/**
 * Exits the isolation mode.
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.exitIsolation = function( comp )
{
    comp = def(comp, DuAEProject.getActiveComp());
    if (!comp) return;
    if (comp.numLayers == 0) return;

    // Reset shy mode
    var dugrFrameLayer = DuGR.getDugrLayer( comp )
    var wasShy = DuAETag.getValue( dugrFrameLayer, DuAETag.Key.DUGR_COMP_SHY, DuAETag.Type.BOOL);
    if (wasShy) comp.hideShyLayers = true;
    else comp.hideShyLayers = false;

    // Remove frame
    DuGR.removeDugrLayer( comp );  

    // Restore layers
    for (var i = 1, n = comp.numLayers; i <= n; i++)
    {
        var layer = comp.layer(i);
        var tag = DuAETag.get( layer );
        // Only hidden layers to improve performance
        var wasHidden = DuAETag.getValue( layer, DuAETag.Key.DUGR_HIDDEN, DuAETag.Type.BOOL, tag );
        if (wasHidden) DuGR.unHideLayer( layer, tag );
    }   
}

/**
 * Adds the selected layers to a (new) group
 * @param {string} group The group name
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 */
DuGR.addSelectedLayersToGroup = function( group, comp )
{
    comp = def(comp, DuAEProject.getActiveComp());
    if (!comp) return;
    if (comp.numLayers == 0) return;

    var layers = comp.selectedLayers;
    for(var i = 0, n = layers.length; i < n; i++)
    {
        var layer = layers[i];
        DuAETag.addGroup( layer, group );
    }
}

/**
 * Gets the list of all groups
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to read.
 * @param {Boolean} [selectedLayers=false] When true, only from selected layers.
 * @returns {DuList} The list of groups
 */
DuGR.listGroups = function ( comp, selectedLayers )
{
    comp = def(comp, DuAEProject.getActiveComp());
    selectedLayers = def(selectedLayers, false);

    if (!comp) return new DuList();
    if (comp.numLayers == 0) return new DuList();
    if (selectedLayers && comp.selectedLayers.length == 0) return new DuList();

    var layers;
    if (selectedLayers) layers = comp.selectedLayers;
    else layers = comp.layers;
    layers = new DuList(layers);

    var groups = new DuList();
    layers.do( function(layer )
    {
        var g = DuAETag.getGroups( layer );
        groups.mergeUnique( g );
    } );
    groups.sort();
    return groups;
}

/**
 * Renames an existing group (in the comp only)
 * @param {string} previousName The current name
 * @param {string} newName The new name
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to read.
 */
DuGR.renameGroup = function( previousName, newName, comp )
{
    comp = def(comp, DuAEProject.getActiveComp());
    if (!comp) return;
    if (comp.numLayers == 0) return;

    for (var i = 1, n = comp.numLayers; i < n; i++)
    {
        DuAETag.renameGroup( comp.layer(i), previousName, newName );
    }
}

/**
 * Removes a group from the composition
 * @param {string} group The group to remove
 * @param {CompItem} [comp=DuAEProject.getActiveComp] The composition to update.
 * @param {Boolean} [selectedLayers=false] When true, only from selected layers.
 */
DuGR.removeGroup = function( group, comp, selectedLayers )
{
    comp = def(comp, DuAEProject.getActiveComp());
    selectedLayers = def(selectedLayers, false);

    if (!comp) return;
    if (comp.numLayers == 0) return;
    if (selectedLayers && comp.selectedLayers.length == 0) return;

    var layers;
    if (selectedLayers) layers = comp.selectedLayers;
    else layers = comp.layers;
    layers = new DuList(layers);

    layers.do( function(layer )
    {
        DuAETag.removeGroup( layer, group );
    } );
}