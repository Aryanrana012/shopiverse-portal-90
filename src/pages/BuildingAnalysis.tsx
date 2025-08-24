
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BuildingDimension, ImageAnalysisResult } from "@/lib/types";
import { analyzeBuildingImage, convertDimension } from "@/services/imageAnalysisService";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";

const BuildingAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ImageAnalysisResult | null>(null);
  const [displayUnit, setDisplayUnit] = useState<'meters' | 'feet' | 'inches'>('meters');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setSelectedImage(file);
    
    // Create a preview URL for the image
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const analysisResult = await analyzeBuildingImage(selectedImage);
      setResult(analysisResult);
      
      if (analysisResult.error) {
        toast.error(analysisResult.error);
      } else if (analysisResult.dimensions) {
        toast.success('Building dimensions analyzed successfully');
      }
    } catch (error) {
      toast.error('An error occurred during analysis');
      console.error('Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatDimension = (value?: number, originalUnit?: 'meters' | 'feet' | 'inches') => {
    if (value === undefined || originalUnit === undefined) return 'N/A';
    
    const converted = convertDimension(value, originalUnit, displayUnit);
    return `${converted.toFixed(2)} ${displayUnit}`;
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Building Dimension Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Upload Building Image</CardTitle>
            <CardDescription>
              Select a clear image of a building to analyze its dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected building"
                      className="h-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG or WEBP (MAX. 10MB)
                      </p>
                    </div>
                  )}
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => {
              setSelectedImage(null);
              setImagePreview(null);
              setResult(null);
            }}>
              Clear
            </Button>
            <Button onClick={handleAnalyze} disabled={!selectedImage || isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                </>
              ) : (
                'Analyze Dimensions'
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>
              Estimated building dimensions based on image analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result?.dimensions ? (
              <div className="space-y-4">
                <div className="flex justify-end mb-4">
                  <Select value={displayUnit} onValueChange={(value: 'meters' | 'feet' | 'inches') => setDisplayUnit(value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meters">Meters</SelectItem>
                      <SelectItem value="feet">Feet</SelectItem>
                      <SelectItem value="inches">Inches</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Width</p>
                    <p className="text-2xl font-bold">
                      {formatDimension(result.dimensions.width, result.dimensions.unit)}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Height</p>
                    <p className="text-2xl font-bold">
                      {formatDimension(result.dimensions.height, result.dimensions.unit)}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Length</p>
                    <p className="text-2xl font-bold">
                      {formatDimension(result.dimensions.length, result.dimensions.unit)}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Confidence</p>
                    <p className="text-2xl font-bold">
                      {result.dimensions.confidence.toFixed(2) * 100}%
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Note: These are estimated dimensions based on image analysis. For precise measurements, 
                    a professional survey is recommended.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Analyzing image...
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Upload an image and click "Analyze Dimensions" to see the results
                    </p>
                    {result?.error && (
                      <p className="text-red-500 mt-2">{result.error}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuildingAnalysis;
