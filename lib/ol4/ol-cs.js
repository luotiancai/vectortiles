
export  const ReplayGroup = (tolerance, maxExtent, resolution, overlaps, opt_renderBuffer)
{
    ol.render.ReplayGroup.call(this);
    /**
     * @private
     * @type {number}
     */
    this.tolerance_ = tolerance;

    /**
     * @private
     * @type {ol.Extent}
     */
    this.maxExtent_ = maxExtent;

    /**
     * @private
     * @type {boolean}
     */
    this.overlaps_ = overlaps;

    /**
     * @private
     * @type {number}
     */
    this.resolution_ = resolution;

    /**
     * @private
     * @type {number|undefined}
     */
    this.renderBuffer_ = opt_renderBuffer;

    /**
     * @private
     * @type {!Object.<string,
		 *        Object.<ol.render.ReplayType, ol.render.canvas.Replay>>}
     */
    this.replaysByZIndex_ = {};

    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */
    this.hitDetectionContext_ = ol.dom.createCanvasContext2D(1, 1);

    /**
     * @private
     * @type {ol.Transform}
     */
    this.hitDetectionTransform_ = ol.transform.create();
};


export  const renderFeature_ =(replayGroup, feature, style, squaredTolerance)
{
    var geometry = style.getGeometryFunction()(feature);
    if (!geometry) {
        return;
    }
    var simplifiedGeometry = geometry.getSimplifiedGeometry(squaredTolerance);
    var renderer = style.getRenderer();
    if (renderer) {
        ol.renderer.vector.renderGeometry_(replayGroup, simplifiedGeometry, style, feature);
    } else {
        var geometryRenderer =
            ol.renderer.vector.GEOMETRY_RENDERERS_[simplifiedGeometry.getType()];
        geometryRenderer(replayGroup, simplifiedGeometry, style, feature);
    }
};
export const adsd=(n1,n2)
{

    console.log(n1+n2)
}