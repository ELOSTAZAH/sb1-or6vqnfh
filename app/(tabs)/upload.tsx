import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Upload, FileImage, Camera, Plus, Trash2, Star } from 'lucide-react-native';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadScreen() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        const newFile = {
          id: Date.now().toString(),
          name: file.name,
          uri: file.uri,
          type: file.mimeType,
          size: file.size,
        };
        
        setUploadedFiles([...uploadedFiles, newFile]);
        
        Alert.alert(
          '🎉 File Added!',
          `${file.name} has been added to your coloring collection!`,
          [{ text: 'Great!', style: 'default' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Oops!',
        'Something went wrong while picking the file. Please try again.',
        [{ text: 'OK', style: 'default' }]
      );
    }
  };

  const handleRemoveFile = (fileId: string) => {
    Alert.alert(
      'Remove File?',
      'Are you sure you want to remove this file from your collection?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
          },
        },
      ]
    );
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE4E1', '#FFF0F5', '#F0F8FF']}
        style={styles.background}
      />

      <LinearGradient
        colors={['#FF6B9D', '#C44569']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>📁 Upload Your Pictures</Text>
          <Text style={styles.headerSubtitle}>
            Add your own pictures to color! 🎨✨
          </Text>
          <View style={styles.starContainer}>
            <Star size={24} color="#FFD700" fill="#FFD700" />
            <Upload size={28} color="white" strokeWidth={3} />
            <Star size={24} color="#FFD700" fill="#FFD700" />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Upload Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>How to Add Pictures 📖</Text>
          <View style={styles.instructionsList}>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionIcon}>1️⃣</Text>
              <Text style={styles.instructionText}>Tap the "Add Picture" button below</Text>
            </View>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionIcon}>2️⃣</Text>
              <Text style={styles.instructionText}>Choose a picture or PDF file</Text>
            </View>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionIcon}>3️⃣</Text>
              <Text style={styles.instructionText}>Start coloring your new picture!</Text>
            </View>
          </View>
        </View>

        {/* Upload Button */}
        <View style={styles.uploadSection}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFilePicker}
            activeOpacity={0.8}>
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.uploadGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Plus size={32} color="white" strokeWidth={3} />
              <Text style={styles.uploadButtonText}>Add Picture</Text>
              <Text style={styles.uploadButtonSubtext}>Images & PDFs welcome!</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Supported Formats */}
        <View style={styles.formatsContainer}>
          <Text style={styles.formatsTitle}>Supported Formats 📋</Text>
          <View style={styles.formatsList}>
            <View style={styles.formatItem}>
              <FileImage size={20} color="#FF6B9D" strokeWidth={3} />
              <Text style={styles.formatText}>Images: JPG, PNG, GIF</Text>
            </View>
            <View style={styles.formatItem}>
              <FileImage size={20} color="#FF6B9D" strokeWidth={3} />
              <Text style={styles.formatText}>Documents: PDF</Text>
            </View>
          </View>
        </View>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <View style={styles.filesContainer}>
            <Text style={styles.filesTitle}>Your Pictures 🖼️ ({uploadedFiles.length})</Text>
            
            {uploadedFiles.map((file) => (
              <View key={file.id} style={styles.fileCard}>
                <View style={styles.fileInfo}>
                  <View style={styles.fileIcon}>
                    {file.type?.startsWith('image/') ? (
                      <FileImage size={24} color="#FF6B9D" strokeWidth={3} />
                    ) : (
                      <FileImage size={24} color="#F59E0B" strokeWidth={3} />
                    )}
                  </View>
                  <View style={styles.fileDetails}>
                    <Text style={styles.fileName} numberOfLines={1}>
                      {file.name}
                    </Text>
                    <Text style={styles.fileSize}>
                      {formatFileSize(file.size || 0)}
                    </Text>
                  </View>
                </View>
                
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveFile(file.id)}>
                  <Trash2 size={20} color="#EF4444" strokeWidth={3} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* Empty State */}
        {uploadedFiles.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📁</Text>
            <Text style={styles.emptyTitle}>No Pictures Yet</Text>
            <Text style={styles.emptyText}>
              Upload your first picture to start creating your own coloring pages!
            </Text>
          </View>
        )}

        {/* Tips Section */}
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Tips for Best Results</Text>
          <View style={styles.tipsList}>
            <Text style={styles.tipItem}>• Choose pictures with clear, bold lines</Text>
            <Text style={styles.tipItem}>• Simple drawings work best for coloring</Text>
            <Text style={styles.tipItem}>• Make sure the image is not too detailed</Text>
            <Text style={styles.tipItem}>• Black and white images are perfect!</Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  content: {
    flex: 1,
  },
  instructionsContainer: {
    margin: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  instructionsList: {
    gap: 12,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  instructionIcon: {
    fontSize: 24,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    flex: 1,
  },
  uploadSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  uploadButton: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  uploadGradient: {
    padding: 24,
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginTop: 8,
  },
  uploadButtonSubtext: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
    fontWeight: '600',
  },
  formatsContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formatsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  formatsList: {
    gap: 8,
  },
  formatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  formatText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  filesContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  filesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  fileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  fileSize: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  tipsContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 30,
  },
});